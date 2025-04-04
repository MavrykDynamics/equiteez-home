import {
  MavrykToolkit,
  WalletContract,
  Contract,
  ChainIds,
} from "@mavrykdynamics/taquito";
import { HttpResponseError } from "@mavrykdynamics/taquito-http-utils";
import retry from "async-retry";

import type { TokenStandardType } from "./types";

const NULL_ADDRESS = "mv1WbZRUmFnpDSjoSfJT5dkvip8SE2NehuNC";
const RETRY_PARAMS = { retries: 2, minTimeout: 0, maxTimeout: 0 };

const FA1_2_ENTRYPOINTS_SCHEMA = [
  ["approve", "pair", "address", "nat"],
  // TODO: investigate why different FA 1.2 tokens have different transfer schema
  // ['transfer', 'pair', 'address', 'pair'],
  ["getAllowance", "pair", "pair", "contract"],
  ["getBalance", "pair", "address", "contract"],
  ["getTotalSupply", "pair", "unit", "contract"],
  // ['updateGeneralContracts', 'prim', 'pair', 'annots']
];

const FA2_ENTRYPOINTS_SCHEMA = [
  ["balance_of", "pair", "list", "contract"],
  ["transfer", "list", "pair"],
  ["update_operators", "list", "or"],
];

export const detectTokenStandard = async (
  tezos: MavrykToolkit,
  contract: string | Contract | WalletContract
): Promise<TokenStandardType | null> => {
  const { entrypoints } =
    typeof contract === "string"
      ? await retry(() => tezos.rpc.getEntrypoints(contract), RETRY_PARAMS)
      : contract.entrypoints;

  switch (true) {
    case isEntrypointsMatched(entrypoints, FA2_ENTRYPOINTS_SCHEMA):
      return "fa2";

    case isEntrypointsMatched(entrypoints, FA1_2_ENTRYPOINTS_SCHEMA):
      return "fa1.2";

    default:
      return null;
  }
};

export const assertFa2TokenDefined = async (
  tezos: MavrykToolkit,
  contract: WalletContract,
  tokenId = 0
) => {
  const chainId = (await tezos.rpc.getChainId()) as ChainIds;

  try {
    await contract.views
      .balance_of([{ owner: NULL_ADDRESS, token_id: tokenId }])
      .read(chainId);
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof HttpResponseError) {
      const issues =
        error.status === 500 && error.body ? JSON.parse(error.body) : null;
      if (
        Array.isArray(issues) &&
        issues.find((issue) => issue.with?.string === "FA2_TOKEN_UNDEFINED")
      )
        throw new IncorrectTokenIdError("incorrectTokenIdErrorMessage");
    }

    throw new Error("unknownErrorCheckingSomeEntrypoint");
  }
};

export class NotMatchingStandardError extends Error {}
export class IncorrectTokenIdError extends NotMatchingStandardError {}

const isEntrypointsMatched = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entrypoints: Record<string, any>,
  schema: string[][]
) => {
  try {
    for (const [name, prim, ...args] of schema) {
      const entry = entrypoints[name];
      if (
        !entry ||
        entry.prim !== prim ||
        entry.args.length !== args.length ||
        args.some((arg, i) => arg !== entry.args[i]?.prim)
      ) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};
