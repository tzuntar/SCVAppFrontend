import React from "react";
import { Link } from "react-router-dom";
import userSettingsIcon from "../pictures/admin_page/user_setting_icon.svg";
import graphIcon from "../pictures/admin_page/Graph_Flat_Icon.svg";
import calenderIcon from "../pictures/admin_page/Schedule_or_Calendar_Flat_Icon.svg";
import schoolIcon from "../pictures/admin_page/school.png";

import "./home.css";

export function AdminHome() {
  return (
    <>
      <div className="admin-home">
        <div className="admin-home-content">
          <div className="admin-home-title">
            <img src={userSettingsIcon} />
            <p>NADZORNA PLOŠČA</p>
          </div>
          <p className="admin-home-subtitle">Izberi orodje:</p>
          <div className="admin-home-select">
            <ItemToSelect
              text={"Urejanje urnikov"}
              href={"/admin/ureditevUrnikov"}
            >
              <img src={calenderIcon} />
            </ItemToSelect>
            <ItemToSelect text={"Ogled grafov"} href={""}>
              <img src={graphIcon} />
            </ItemToSelect>
            <ItemToSelect text={"Spremeni šolo"} href={""}>
              <img src={schoolIcon} />
            </ItemToSelect>
          </div>
        </div>
      </div>
    </>
  );
}

function ItemToSelect({ text, children, href }) {
  return (
    <Link className="admin-home-select-item" to={href}>
      <div className="admin-home-select-item-box">{children}</div>
      <p className="">{text}</p>
    </Link>
  );
}
