import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {} from 'reactstrap';
const links = [
  {
    to: "/",
    exact: true,
    title: <FormattedMessage id="Links=>home" />
  },
  {
    to: "/login",
    exact: true,
    title: <FormattedMessage id="Links=>login" />
  },
  {
    to: "/register",
    exact: true,
    title: <FormattedMessage id="Links=>register" />
  }
];

const Header = () => {
  return (
    <div>
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink activeClassName="active" to={link.to} exact={link.exact}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
