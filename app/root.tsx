import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { json, LinksFunction } from "@remix-run/node";
// providers

// global styles
import stylesheet from "~/styles/index.css?url";

// providers
import { AppProvider } from "./providers/AppProvider/AppProvider";
import { MarketsProvider } from "./providers/MarketsProvider/markets.provider";
import { TokensProvider } from "./providers/TokensProvider/tokens.provider";
import { AppGlobalLoader } from "./providers/AppGlobalLoader";
import { CurrencyProvider } from "./providers/CurrencyProvider/currency.provider";
import {
  fetchTokensData,
  fetchTokensMetadata,
} from "./providers/TokensProvider/utils/fetchTokensdata";
import { useDataFromLoader } from "./hooks/useDataFromLoader";
import ToasterProvider from "./providers/ToasterProvider/toaster.provider";
import { ApolloProvider } from "./providers/ApolloProvider/apollo.provider";
import { ToasterMessages } from "./providers/ToasterProvider/components/ToasterMessages";
import { ErrorPageTemp } from "./templates/ErrorPageTemp/ErrorPageTemp";
import {
  errorDescDefaultText,
  errorDescDefaultTextWhenError,
  errorHeaderDefaultText,
  errorHeaderDefaultTextWhenError,
} from "./providers/ToasterProvider/toaster.provider.const";
import { DexProvider } from "./providers/Dexprovider/dex.provider";
import { DipdupProvider } from "./providers/DipdupProvider/DipDup.provider";

export const links: LinksFunction = () => [
  { rel: "preload", as: "style", href: stylesheet },
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async () => {
  const tokens = await fetchTokensData();

  const [tokensMetadata] = await Promise.all([
    fetchTokensMetadata(tokens),
    // fetchUsdToTokenRates(),
  ]);

  return json({
    tokens,
    tokensMetadata,
    usdToToken: {},
    fiatToTezos: {},
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const {
    tokens = [],
    tokensMetadata = {},
    fiatToTezos = {},
    usdToToken = {},
  } = useDataFromLoader<typeof loader>() ?? {};

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <div id="root">
          <ToasterProvider
            maintance={process.env.REACT_APP_MAINTANCE_MODE === "on"}
          >
            <AppProvider>
              <ApolloProvider>
                <DipdupProvider>
                  <CurrencyProvider
                    fiatToTezos={fiatToTezos}
                    usdToToken={usdToToken}
                  >
                    <TokensProvider
                      initialTokens={tokens}
                      initialTokensMetadata={tokensMetadata}
                    >
                      <MarketsProvider>
                        <DexProvider>
                          <AppGlobalLoader>{children}</AppGlobalLoader>
                        </DexProvider>
                      </MarketsProvider>
                    </TokensProvider>
                  </CurrencyProvider>
                </DipdupProvider>
              </ApolloProvider>
            </AppProvider>
            <ToasterMessages />
          </ToasterProvider>
          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

/** catch server errors ************************** */
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorPageTemp
        headerText={errorHeaderDefaultText}
        descText={errorDescDefaultText}
        type="router"
      />
    );
  }

  return (
    <ErrorPageTemp
      headerText={errorHeaderDefaultTextWhenError}
      descText={errorDescDefaultTextWhenError}
      type="fatal"
    />
  );
}
