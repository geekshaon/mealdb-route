import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import ActiveLink from "../extra/ActiveLink";
import "./Header.css";

const Header = () => {
  const Navigation = useNavigation();
  return (
    <div>
      <nav className="container mx-auto bg-slate-900 px-3 py-3 rounded-lg flex justify-around text-slate-50 items-center">
        <h2 className="text-2xl">MealDb by RexShaon</h2>
        <div className="menu flex">
          <ActiveLink className="px-2" to="/">
            Home
          </ActiveLink>
          <ActiveLink className="px-2" to="/meals">
            Meals
          </ActiveLink>
          <ActiveLink className="px-2" to="/about">
            About
          </ActiveLink>
        </div>
      </nav>
      <div className="container mx-auto text-center">
        {Navigation.state == "loading" ? "Loading boss" : ""}
      </div>

      <div className="container mx-auto ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Header;
