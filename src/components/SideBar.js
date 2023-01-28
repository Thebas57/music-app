import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const SideBar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <div className="sidebar-container">
      <div className="icon-mobile">
        {!menuMobile ? (
          <GiHamburgerMenu onClick={() => setMenuMobile(true)} />
        ) : (
          <RxCross1 onClick={() => setMenuMobile(false)}/>
        )}
      </div>
      {menuMobile && (
        <div className="menu-mobile">
          yooooo
        </div>
      )}
    </div>
  );
};

export default SideBar;
