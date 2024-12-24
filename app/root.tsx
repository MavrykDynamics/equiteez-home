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
import { cssBundleHref } from "@remix-run/css-bundle";

// providers
import { AppProvider } from "./providers/AppProvider/AppProvider";
import { EstatesProvider } from "./providers/EstatesProvider/estates.provider";
import { TokensProvider } from "./providers/TokensProvider/tokens.provider";
import { PopupProvider } from "./providers/PopupProvider/popup.provider";
import { AppGlobalLoader } from "./providers/AppGlobalLoader";
import { CurrencyProvider } from "./providers/CurrencyProvider/currency.provider";
import {
  fetchTokensData,
  fetchTokensMetadata,
} from "./providers/TokensProvider/utils/fetchTokensdata";
import { fetchUsdToTokenRates } from "./lib/mavryk/endpoints/get-exchange-rates";
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
import { FC } from "react";
import { DexProvider } from "./providers/Dexprovider/dex.provider";
import { MotionConfig } from "framer-motion";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import { MOBILE_WIDTH } from "./styles/media";

export const links: LinksFunction = () => [
  { rel: "preload", as: "style", href: stylesheet },
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async () => {
  const tokens = await fetchTokensData();

  const [tokensMetadata, usdToToken] = await Promise.all([
    fetchTokensMetadata(tokens),
    fetchUsdToTokenRates(),
  ]);

  return json({
    tokens,
    tokensMetadata,
    fiatToTezos: {},
    usdToToken,
  });
};

const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  // TODO handle laoder data elsewhere
  const {
    tokens = [],
    tokensMetadata = {},
    fiatToTezos = {},
    usdToToken = {},
  } = useDataFromLoader<typeof loader>() ?? {};

  return (
    <AppProvider>
      <ApolloProvider>
        <CurrencyProvider fiatToTezos={fiatToTezos} usdToToken={usdToToken}>
          <TokensProvider
            initialTokens={tokens}
            initialTokensMetadata={tokensMetadata}
          >
            <EstatesProvider>
              <DexProvider>
                <AppGlobalLoader>
                  <PopupProvider>{children}</PopupProvider>
                </AppGlobalLoader>
              </DexProvider>
            </EstatesProvider>
          </TokensProvider>
        </CurrencyProvider>
      </ApolloProvider>
    </AppProvider>
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { width } = useWindowDimensions();
  const isMobile = width < MOBILE_WIDTH;

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
            <MotionConfig reducedMotion={isMobile ? "user" : "always"}>
              <AppWrapper>{children}</AppWrapper>
              <ToasterMessages />
            </MotionConfig>
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
