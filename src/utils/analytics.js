import ReactGA from "react-ga";

/** @description  defines a page view event with the current page this function is being called at*/
export const pageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

/**
 *@description Log an event to google analytics such as add to cart or login or logout
 * @param {Object} args - an object that should contain at least a category and action event which falls under google analytics event requirements (it can contain others, please read the docs)
 */
export const logEvent = args => {
  if (args.category && args.action) {
    ReactGA.event({ ...args });
  }
};

/**
 * @description Log error to google analytics when something is wrong with the website (use it in try catch)
 * @param {String} description - Description of the error
 * @param {Boolean} fatal - is this error fatal or not? 
 */
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
