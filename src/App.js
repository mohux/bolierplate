import React, { Suspense, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import locales from "./locales";
import Layout from "./components/layout";
import { IntlProvider } from "react-intl";
import routes from "./routes";

const LANG_STYLESHEET = document.querySelector("#lang-css");
const App = props => {
  LANG_STYLESHEET.href = "/libs/bootstrap/bootstrap-rtl.min.css";
  return (
    <IntlProvider locale="ar" messages={locales["ar"]} textComponent={Fragment}>
      <Layout>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
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
export default App;
