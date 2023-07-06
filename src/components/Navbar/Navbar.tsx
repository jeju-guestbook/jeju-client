import { useState } from "react";
import { getNavItem } from "../../lib/modules/getNavItem";
import * as Style from "./Navbar.style";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState("/map");
  const NavItems = [
    { icons: null, text: "지도", value: "/map" },
    { icons: null, text: "방명록", value: "/guestbookall" },
    { icons: null, text: "우표", value: "/postcard" },
  ];

  return (
    <Style.NavbarContainer>
      {NavItems.map((elem, idx) => {
        let isChecked = "";

        if (elem.value === checked) {
          isChecked = "Checked";
        }

        return (
          <Style.NavItem key={idx}>
            <input
              type="radio"
              id={elem.text}
              name="menu"
              value={elem.value}
              onChange={(e) => getNavItem(e, setChecked, navigate)}
            />
            <label htmlFor={elem.text} className={isChecked}>
              {elem.text}
            </label>
          </Style.NavItem>
        );
      })}
    </Style.NavbarContainer>
  );
}

export default Navbar;
