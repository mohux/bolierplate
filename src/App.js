import React, { Suspense, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import locales from "./locales";
import Layout from "./components/layout";
import { IntlProvider } from "react-intl";
import routes from "./routes";
import Preloader from "./components/loaders/preloader";
import { useLocation, matchPath, Redirect } from "react-router-dom";
import { FALLBACK_LOCALE, ALLOWED_LOCALES } from "./utils/constants";
import { inject } from "mobx-react";
const LANG_STYLESHEET = document.querySelector("#lang-css");
const HTML = document.querySelector("html");

const App = ({ updateLocale, isLangChanging }) => {
  // ? what is this?????
  // * This react router dom hooks to get only location object
  // * using matchPath because this component is not wrapped inside a route component
  // * which means we need a way to get the locale param
  // * changing bootstrap from RTL to LTR via lang... maybe add a loader between lang change?
  // * Don't worry, already added changing function to localeStore mobx, just check if it's updating to display a loader
  const location = useLocation();
  const { params } =
    matchPath(location.pathname, {
      path: "/:locale",
      exact: false,
      strict: false
    }) || {};

  const lang = params
    ? params.locale
    : localStorage.getItem("locale") || FALLBACK_LOCALE;

  if (!ALLOWED_LOCALES.includes(lang)) {
    return (
      <Redirect
        to={`/${localStorage.getItem("locale") ||
          FALLBACK_LOCALE}/page-not-found`}
      />
    );
  }

  // * To make sure if the user vists from url to set the visited locale as the default one
  if (localStorage.getItem("locale") !== lang) {
    updateLocale(lang);
  }
  LANG_STYLESHEET.href = `/libs/bootstrap/bootstrap-${lang}.min.css`;
  HTML.dir = lang === "ar" ? "rtl" : "ltr";
  HTML.lang = lang;
  return (
    <IntlProvider
      locale={lang}
      messages={locales[lang]}
      textComponent={Fragment}
    >
      <Layout>
        {isLangChanging && <Preloader />}
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Redirect
                  to={`${localStorage.getItem("locale") || FALLBACK_LOCALE}`}
                />
              )}
            />
            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </Layout>
    </IntlProvider>
  );
};
export default inject(state => ({
  updateLocale: state.store.locale.updateLocale,
  isLangChanging: state.store.locale.updating
}))(App);
