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
import {
  json,
  type LinksFunction,
} from "@remix-run/cloudflare";
import { useEffect, useLayoutEffect, useRef } from "react";
import stylesheet from "~/styles/index.css?url";
import ToasterProvider from "./providers/ToasterProvider/toaster.provider";
import { ToasterMessages } from "./providers/ToasterProvider/components/ToasterMessages";
import { ErrorPageTemp } from "./templates/ErrorPageTemp/ErrorPageTemp";
import {
  errorDescDefaultText,
  errorDescDefaultTextWhenError,
  errorHeaderDefaultText,
  errorHeaderDefaultTextWhenError,
} from "./providers/ToasterProvider/toaster.provider.const";
import { useDataFromLoader } from "~/hooks/useDataFromLoader";

export const links: LinksFunction = () => [
  { rel: "preload", as: "style", href: stylesheet },
  { rel: "stylesheet", href: stylesheet },
];

const useIsomorphicLayoutEffect =
  typeof document === "undefined" ? useEffect : useLayoutEffect;

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
    googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID ?? null,
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { googleTagManagerId } = useDataFromLoader<typeof loader>() ?? {};

  // The stock GTM snippet inserts a <script> before the first <script> in the
  // document. Running it before hydration shifts the DOM React is hydrating, so
  // it is injected verbatim only after hydration.
  useEffect(() => {
    if (!googleTagManagerId || document.getElementById("gtm-script")) return;

    const script = document.createElement("script");
    script.id = "gtm-script";
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',${JSON.stringify(googleTagManagerId)});`;
    document.head.appendChild(script);
  }, [googleTagManagerId]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
