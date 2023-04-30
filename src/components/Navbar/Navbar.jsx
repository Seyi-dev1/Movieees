import React from "react";
import "./navbar.scss";
import { MdLocalMovies } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomizedMenus from "./DropdownMenu";
import CustomizedLoginMenu from "./LoginDropdown";
import TemporaryDrawer from "./Drawer";
const Navbar = () => {
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser,
  );
  const user = useSelector((state) => userSelector(state));

  return (
    <div className="navbar">
      <Link to="/" className="title_con">
        <MdLocalMovies className="icon" />
        <div className="title">
          <span>BLOCK</span>
          <span>BUSTER</span>
          <h1>Films catalogue</h1>
        </div>
      </Link>
      <div className="menu">
        <TemporaryDrawer anchor className="menu_btn" />
      </div>
    </div>
  );
};

export default Navbar;
