import React from "react";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";

/**@description  Just a normal react router dom nav link to support mulitlanguages*/
const Link = ({ children, className, activeClassName, to, exact, locale }) => {
  return (
    <NavLink
      to={`/${locale}${to}`}
      className={className}
      activeClassName={activeClassName}
      exact={exact}
    >
      {children}
    </NavLink>
  );
};

Link.propTypes = {
  /** Indicates className passed to NavLink  */
  className: PropTypes.string,
  /** Indicates active ClassName passed to active NavLink  */
  activeClassName: PropTypes.string,
  /** Destination to redirect with, it will be added with the current locale  */
  to: PropTypes.string,
  /** exact prop passed to react router dom navLink component as true or false  */
  exact: PropTypes.bool
};

export default inject(state => ({ locale: state.store.locale.lang }))(
  observer(Link)
);
