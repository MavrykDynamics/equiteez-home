// Toaster statuses
export const TOASTER_SUCCESS = "success";
export const TOASTER_ERROR = "error";
export const TOASTER_WARNING = "warning";
export const TOASTER_INFO = "info";
export const TOASTER_LOADING = "loading";

// icon helper
export const TOAST_ICON_MAPPER = {
  [TOASTER_SUCCESS]: "okay",
  [TOASTER_ERROR]: TOASTER_ERROR,
  [TOASTER_WARNING]: "attention",
  [TOASTER_INFO]: "info-reg",
  [TOASTER_LOADING]: "small-spinner",
};

// consts
export const TOAST_TIME_TO_LIVE = 4600;
export const ANIMATION_DURATION = 400;
export const TOASTS_LIMIT = 5;

// animations
export const TOASTER_HIDE = "hide";
export const TOASTER_REVEAL = "reveal";

// COMMON TEXTS ACROSS LOADERS
export const TOASTER_UPDATE_DATA_AFTER_ACTION_DATA = {
  title: "Processing",
  message: "Waiting for transaction confirmation...",
};

export const ACTION_START_MESSAGE_TEXT = "Please wait 30s";
export const ACTION_COMPLETION_MESSAGE_TEXT = "All good :)";
export const DEFAULT_REQUEST_COMPLETION_MESSAGE_TEXT = "Request confirmed.";

// TOASTER TEXTS IDS
export const TOASTER_SUBSCRIPTION_ERROR = "TOASTER_SUBSCRIPTION_ERROR";

// Error page default texts

export const errorHeaderDefaultText = "This page is outside the universe";
export const errorDescDefaultText = (
  <>
    The page you are trying to access doesn’t exist or has been moved.
    <br /> Try going back to the main page
  </>
);

// with error in toaster context
export const errorHeaderDefaultTextWhenError =
  "Your spaceship has encountered a bug";
export const errorDescDefaultTextWhenError = (
  <>
    A significant error has been encountered, please take a look at our{" "}
    <a href="https://docs.mavenfinance.io/" target="_blank" rel="noreferrer">
      Docs{" "}
    </a>
    or reach out to us through our{" "}
    <a
      href="https://discord.com/invite/7VXPR4gkT6"
      target="_blank"
      rel="noreferrer"
    >
      Discord
    </a>
  </>
);
