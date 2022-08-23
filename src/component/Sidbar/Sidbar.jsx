import React from "react";
import "./Sidbar.css";
import LogOut from "./../Logout/LogOut";
import { Link } from "react-router-dom";
import { dataSidebar } from "../../data";

const Sidbar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarText">
        <h1 className="sieBarHeader">Monitait</h1>

        <ul className="sideBarLists">
          {dataSidebar.map((data) => {
            const { id, title, to, icon } = data;
            return (
              <li className="sideBarItem" key={id}>
                <span className="border-hover">
                  <Link to={to} className="link linkText">
                    <span>{icon}</span> {title}
                  </Link>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <LogOut />
    </div>
  );
};

export default Sidbar;
