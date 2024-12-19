import { FC } from "react";
import { Spinner } from "~/lib/atoms/Spinner/Spinner";
import { useTokensContext } from "./TokensProvider/tokens.provider";
import { useEstatesContext } from "./EstatesProvider/estates.provider";

export const AppGlobalLoader: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading: isMarketLoading } = useEstatesContext();
  const { isLoading: isTokensMetaLoading } = useTokensContext();

  if (isTokensMetaLoading || isMarketLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center bg-mvrk-dark">
        <Spinner size={56} />
      </div>
    );

  return <div>{children}</div>;
};
