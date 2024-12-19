import { TokenPricesFeedsType } from "~/lib/fiat-currency";
import { getTokenSlugByFeed } from "~/lib/fiat-currency/token-names";
import { api } from "~/lib/utils/api";
import { atomsToTokens } from "~/lib/utils/formaters";

const feedsQuery = `
    query dataFeedsPrices {
      aggregator: aggregator(where: { admin: { _neq: "" } }, order_by: { creation_timestamp: desc }) {
        address
        name
        decimals
        last_completed_data
        last_completed_data_pct_oracle_resp
        last_completed_data_last_updated_at
        last_completed_data_epoch
      }
    }
  `;

export const fetchUsdToTokenRates = async () => {
  try {
    const { data } = await api<{ data: { aggregator: TokenPricesFeedsType } }>(
      "https://api.mavenfinance.io/v1/graphql",
      {
        method: "POST",
        body: JSON.stringify({ query: feedsQuery }),
      }
    );

    const mappedRates = normalizeTokenPrices(data.data.aggregator);

    return mappedRates;
  } catch (e) {
    throw new Error("Error while fetching tezos rates");
  }
};

export const normalizeTokenPrices = (feedsLedger: TokenPricesFeedsType) => {
  return feedsLedger.reduce<Record<string, string>>((acc, feedGql) => {
    const slug = getTokenSlugByFeed(feedGql.name);

    if (slug) {
      acc[slug] = atomsToTokens(
        feedGql.last_completed_data,
        feedGql.decimals
      ).toString();
    }
    return acc;
  }, {});
};
