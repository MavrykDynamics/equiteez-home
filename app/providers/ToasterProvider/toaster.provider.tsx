import React, { Suspense, useContext } from "react";
import { ErrorPageTemp } from "~/templates/ErrorPageTemp/ErrorPageTemp";

// types
import type { ToasterContextType, ToasterTypes } from "./toaster.provider.type";
import { FatalError, CustomErrors } from "../../errors/error";

// consts
import {
  TOASTER_ERROR,
  TOASTER_INFO,
  TOASTER_LOADING,
  TOASTER_SUCCESS,
  TOASTER_WARNING,
} from "./toaster.provider.const";
import { v4 as uuid } from "uuid";
import { InternalErrorType } from "~/errors/error.type";
import { getErrorPageData } from "./helpers/getErrorPageData";
import { ERROR_TYPE_FATAL, ERROR_TYPE_ROUTER } from "~/errors/error.const";
import { MaintancePageTemp } from "~/templates/MaintancePageTemp";
import { AppProvider } from "../AppProvider/AppProvider";
import { TokensProvider } from "../TokensProvider/tokens.provider";

export const toasterContext = React.createContext<ToasterContextType>(
  undefined!
);

type Props = {
  children: React.ReactNode;
  error?: CustomErrors;
  pageNotFound?: JSX.Element;
  maintance?: boolean;
};

type State = {
  context: ToasterContextType;
};

/**
 *
 */
export default class ToasterProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      context: {
        bug: this.bug,
        info: this.info,
        warning: this.warning,
        fatal: this.fatal,
        success: this.success,
        loading: this.loading,
        // fatal error to show 404 page
        error: props.error || null, //fatal error
        // custom errors, like error from Wallet, api, validation etc.

        hideToasterMessage: this.hideToasterMessage,
        deleteToasterFromArray: this.deleteToasterFromArray,
        messages: [],
        setError: this.setError,
        maintance: props.maintance ?? false,
      },
    };
  }

  /**
   *
   * @param error It is the error that was thrown by the descendant component.
   *
   * Error boundaries do not catch errors for:
   * Event handlers
   * Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
   * Server side rendering
   * Errors thrown in the error boundary itself (rather than its children)
   */
  componentDidCatch(error: Error): void {
    this.addToasterMessage("", error.message, TOASTER_ERROR);
    this.fatal(new FatalError(error));
  }

  addToasterMessage = (
    title: string,
    message: string,
    type: ToasterTypes
  ): string => {
    const unique = uuid();
    this.setState((prevState) => ({
      context: {
        ...prevState.context,
        messages: prevState.context.messages.concat([
          {
            type,
            title,
            message,
            unique,
            hide: false,
          },
        ]),
      },
    }));

    return unique;
  };

  bug = (rawError: Error | string, title = ""): string => {
    if (rawError instanceof Error) {
      console.warn(rawError.message);
      return this.addToasterMessage(title, rawError.message, TOASTER_ERROR);
    } else {
      console.warn(rawError);
      return this.addToasterMessage(title, rawError, TOASTER_ERROR);
    }
  };

  fatal = (error: CustomErrors): void => {
    this.setError(error);
    console.error(error);
  };

  success = (title: string, message: string): string => {
    return this.addToasterMessage(title, message, TOASTER_SUCCESS);
  };

  info = (title: string, message: string): string => {
    return this.addToasterMessage(title, message, TOASTER_INFO);
  };

  warning = (title: string, message: string): string => {
    console.warn(message);
    return this.addToasterMessage(title, message, TOASTER_WARNING);
  };

  loading = (title: string, message: string): string => {
    return this.addToasterMessage(title, message, TOASTER_LOADING);
  };

  setError = (error: CustomErrors): void => {
    this.setState((prevState) => ({
      context: {
        ...prevState.context,
        error,
      },
    }));
  };

  /**
   * sets hide property for toast to 'true' to play hide animation
   * @param unique toaster id
   */
  hideToasterMessage = (unique: string): void => {
    const { messages } = this.state.context;
    const message = messages.find((m) => m.unique === unique);

    if (!message) return;

    const hidedMessage = { ...message, hide: true };

    const _messages = messages.map((m) => {
      if (m.unique === unique) {
        return hidedMessage;
      }
      return m;
    });

    this.setState((prevState) => ({
      context: {
        ...prevState.context,
        messages: _messages,
      },
    }));
  };

  /**
   * completely deletes toast from messages
   * should be used only within ToasterMessages component
   * @param unique toast id
   */
  deleteToasterFromArray = (unique: string): void => {
    const { messages } = this.state.context;

    this.setState((prevState) => ({
      context: {
        ...prevState.context,
        messages: messages.filter((m) => m.unique !== unique),
      },
    }));
  };

  /**
   *
   */
  render(): JSX.Element {
    const { error = null } = this.state.context;
    let type: InternalErrorType = ERROR_TYPE_ROUTER;
    let errorPageContent = null;

    if (error instanceof FatalError) {
      type = error?.type ?? ERROR_TYPE_FATAL;
    }

    errorPageContent = getErrorPageData(type);

    const shouldRenderChildren =
      error === null && !this.state.context.maintance;

    return (
      <Suspense>
        <toasterContext.Provider value={this.state.context}>
          {shouldRenderChildren ? (
            this.props.children
          ) : (
            <AppProvider>
              <TokensProvider initialTokens={[]} initialTokensMetadata={{}}>
                {this.state.context.maintance ? (
                  <MaintancePageTemp />
                ) : (
                  <ErrorPageTemp
                    headerText={errorPageContent.header}
                    descText={errorPageContent.desc}
                    type={type}
                  />
                )}
              </TokensProvider>
            </AppProvider>
          )}
        </toasterContext.Provider>
      </Suspense>
    );
  }
}

export const useToasterContext = () => useContext(toasterContext);
