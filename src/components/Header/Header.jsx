import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="container mx-auto bg-slate-900 px-3 py-3 rounded-lg flex justify-around text-slate-50 items-center">
        <h2 className="text-2xl">MealDb by RexShaon</h2>
        <div className="meanu">
          <Link className="px-2" to="/">
            Home
          </Link>
          <Link className="px-2" to="/meals">
            About
          </Link>
          <Link className="px-2" to="/">
            Meal
          </Link>
        </div>
      </nav>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Header;
