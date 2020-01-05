import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./styles/header.scss";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import NavLink from "../shared/navLink";
import LocaleSwitcher from "../localeSwitcher";

const links = [
  {
    to: "/",
    exact: true,
    title: <FormattedMessage id="Links:home" />
  },
  {
    to: "/login",
    exact: true,
    title: <FormattedMessage id="Links:login" />
  },
  {
    to: "/register",
    exact: true,
    title: <FormattedMessage id="Links:register" />
  },
  {
    to: "/posts",
    exact: true,
    title: <FormattedMessage id="Links:posts" />
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="header">
      <Navbar color="dark" className="navbar-dark py-3" light expand="md">
        <NavLink className="navbar-brand" to={`/`}>
          <FormattedMessage id="titles:uxbert_boilerplate" />
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100" navbar>
            {links.map((link, idx) => (
              <NavItem key={idx}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={link.to}
                  exact={link.exact}
                >
                  {link.title}
                </NavLink>
              </NavItem>
            ))}
            <LocaleSwitcher />
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
