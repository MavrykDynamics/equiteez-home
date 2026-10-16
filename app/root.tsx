import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigationType,
  useRouteError,
} from "@remix-run/react";
import { LinksFunction, json } from "@remix-run/node";
import { useEffect, useLayoutEffect, useRef } from "react";
// providers

// global styles
import stylesheet from "~/styles/index.css?url";

// providers
// import { AppProvider } from "./providers/AppProvider/AppProvider";
// import { MarketsProvider } from "./providers/MarketsProvider/markets.provider";
// import { TokensProvider } from "./providers/TokensProvider/tokens.provider";
// import { AppGlobalLoader } from "./providers/AppGlobalLoader";
// import { CurrencyProvider } from "./providers/CurrencyProvider/currency.provider";
// import {
//   fetchTokensData,
//   fetchTokensMetadata,
// } from "./providers/TokensProvider/utils/fetchTokensdata";
// import { useDataFromLoader } from "./hooks/useDataFromLoader";
import ToasterProvider from "./providers/ToasterProvider/toaster.provider";
// import { ApolloProvider } from "./providers/ApolloProvider/apollo.provider";
import { ToasterMessages } from "./providers/ToasterProvider/components/ToasterMessages";
import { ErrorPageTemp } from "./templates/ErrorPageTemp/ErrorPageTemp";
import {
  errorDescDefaultText,
  errorDescDefaultTextWhenError,
  errorHeaderDefaultText,
  errorHeaderDefaultTextWhenError,
} from "./providers/ToasterProvider/toaster.provider.const";
import { useDataFromLoader } from "~/hooks/useDataFromLoader";
// import { DexProvider } from "./providers/Dexprovider/dex.provider";
// import { DipdupProvider } from "./providers/DipdupProvider/DipDup.provider";

export const links: LinksFunction = () => [
  { rel: "preload", as: "style", href: stylesheet },
  { rel: "stylesheet", href: stylesheet },
];

const useIsomorphicLayoutEffect =
  typeof document === "undefined" ? useEffect : useLayoutEffect;

// export const loader = async () => {
//   const tokens = await fetchTokensData();

//   const [tokensMetadata] = await Promise.all([
//     fetchTokensMetadata(tokens),
//     // fetchUsdToTokenRates(),
//   ]);

//   return json({
//     tokens,
//     tokensMetadata,
//     usdToToken: {},
//     fiatToTezos: {},
//   });
// };

function RouteScrollReset() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const routeKey = `${location.pathname}${location.search}`;
  const previousRouteKeyRef = useRef(routeKey);

  const resetDocumentScroll = () => {
    const previousHtmlScrollBehavior =
      document.documentElement.style.scrollBehavior;
    const previousBodyScrollBehavior = document.body.style.scrollBehavior;

    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    try {
      window.scrollTo(0, 0);

      const scrollTargets = [
        document.scrollingElement,
        document.documentElement,
        document.body,
        document.getElementById("root"),
      ];

      scrollTargets.forEach((scrollTarget) => {
        if (!scrollTarget) {
          return;
        }

        scrollTarget.scrollTop = 0;
        scrollTarget.scrollLeft = 0;
      });
    } finally {
      document.documentElement.style.scrollBehavior =
        previousHtmlScrollBehavior;
      document.body.style.scrollBehavior = previousBodyScrollBehavior;
    }
  };

  useIsomorphicLayoutEffect(() => {
    const previousRouteKey = previousRouteKeyRef.current;
    previousRouteKeyRef.current = routeKey;

    if (
      previousRouteKey === routeKey ||
      location.hash ||
      navigationType === "POP"
    ) {
      return;
    }

    resetDocumentScroll();
    const animationFrameId = window.requestAnimationFrame(resetDocumentScroll);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [location.hash, navigationType, routeKey]);

  return null;
}

export const loader = async () => {
  return json({
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID ?? null,
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { GOOGLE_TAG_MANAGER_ID } = useDataFromLoader<typeof loader>() ?? {};
  const googleTagManagerId = GOOGLE_TAG_MANAGER_ID || "";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {googleTagManagerId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');`,
            }}
          />
        )}
        <Meta />
        <Links />
      </head>

      <body>
        {googleTagManagerId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <div id="root">
          <ToasterProvider
            maintance={process.env.REACT_APP_MAINTANCE_MODE === "on"}
          >
            {/* <AppProvider> */}
            {/* <ApolloProvider> */}
            {/* <DipdupProvider>
                  <CurrencyProvider
                    fiatToTezos={fiatToTezos}
                    usdToToken={usdToToken}
                  >
                    <TokensProvider
                      initialTokens={tokens}
                      initialTokensMetadata={tokensMetadata}
                    >
                      <MarketsProvider>
                        <DexProvider> */}
            {/* <AppGlobalLoader>{children}</AppGlobalLoader> */}
            {children}
            {/* </DexProvider>
                      </MarketsProvider>
                    </TokensProvider>
                  </CurrencyProvider> */}
            {/* </DipdupProvider> */}
            {/* </ApolloProvider> */}
            {/* </AppProvider> */}
            <ToasterMessages />
          </ToasterProvider>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <RouteScrollReset />
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
