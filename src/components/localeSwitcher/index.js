import React from "react";
import { observer, inject } from "mobx-react";
import { NavItem } from "reactstrap";
import { useHistory, matchPath } from "react-router-dom";

const LocaleSwitcher = ({ updateLocale }) => {
  const { replace, location } = useHistory();

  const changeLanguage = lang => {
    const { pathname } = location;
    const { params } = matchPath(pathname, {
      path: "/:locale",
      exact: false,
      strict: false
    });
    const route = pathname.replace(`/${params.locale}`, `/${lang}`);
    updateLocale(lang);
    replace(route);
  };

  return (
    <div className="d-flex lang-switcher ml-auto">
      <NavItem>
        <button
          onClick={() => changeLanguage("ar")}
          className="nav-link btn mr-1"
        >
          العربية
        </button>
      </NavItem>
      <NavItem>
        <button onClick={() => changeLanguage("en")} className="nav-link btn">
          English
        </button>
      </NavItem>
    </div>
  );
};

export default inject(state => ({
  updateLocale: state.store.locale.updateLocale,
}))(observer(LocaleSwitcher));
