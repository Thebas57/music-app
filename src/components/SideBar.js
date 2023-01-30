import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo.png";
import { links } from "../assets/constants";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <div className="sidebar-container">
        <div className="ordi">
          <div className="img-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav">
            {links.map((link) => (
              <NavLink className="navLink" key={link.name} to={link.to} exact>
                <link.icon />
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar-container-mobile">
        <div className="mobile">
          <div className="icon-mobile">
            {!menuMobile ? (
              <GiHamburgerMenu onClick={() => setMenuMobile(true)} />
            ) : (
              <RxCross1 onClick={() => setMenuMobile(false)} />
            )}
          </div>
          {menuMobile && (
            <div className="menu-mobile">
              <div className="img-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="nav">
                {links.map((link) => (
                  <NavLink
                    className="navLink"
                    key={link.name}
                    to={link.to}
                    exact
                  >
                    <link.icon />
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
