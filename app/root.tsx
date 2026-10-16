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
  type LoaderFunctionArgs,
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

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return json({
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID ?? null,
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { GOOGLE_TAG_MANAGER_ID } = useDataFromLoader<typeof loader>() ?? {};

  useEffect(() => {
    if (process.env.REACT_APP_ENV === "prod" && GOOGLE_TAG_MANAGER_ID) {
      addGtmScript(GOOGLE_TAG_MANAGER_ID);
    }
  }, [GOOGLE_TAG_MANAGER_ID]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        {process.env.REACT_APP_ENV === "prod" && GOOGLE_TAG_MANAGER_ID && (
          <>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
            {/* End Google Tag Manager */}
          </>
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

/**
 * GTAG configuration to avoid hydration errors *********************
 */
let gtmScriptAdded = false;

declare global {
  interface Window {
    [key: string]: object[];
    gtag: (
      option: string,
      gaTrackingId: string,
      options: Record<string, unknown>
    ) => void;
  }
}

function addGtmScript(GTM_ID: string | undefined) {
  if (!GTM_ID || gtmScriptAdded) {
    return;
  }

  (function (w, d, s, l, i) {
    w[l] = w[l] || [];

    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w[l].push(arguments);
    }

    w.gtag = gtag;
    // @ts-expect-error // it uses arguments in general (see above gtag fn)
    gtag("js", new Date());

    if (!gtmScriptAdded) {
      // Ensure the script is not loaded multiple times
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== "dataLayer" ? "&l=" + l : "";
      // @ts-expect-error //it is script tag
      j.async = true;
      // @ts-expect-error //it is script tag
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode?.insertBefore(j, f);
    }
  })(window, document, "script", "dataLayer", GTM_ID);

  // @ts-expect-error // it uses arguments in general (see above gtag fn)
  gtag("config", GTM_ID, {
    page_path: window.location.pathname,
  });

  gtmScriptAdded = true;
}
