import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { MdOutlineManageAccounts, MdSettings } from "react-icons/md";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { FaHistory, FaSignOutAlt } from "react-icons/fa";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { startSignOut } from "../../redux/user/userReducer";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 4,
    marginTop: theme.spacing(1),
    minWidth: 150,
    background: grey[800],
    color: grey[100],
    fontSize: 10,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 13,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const StyledButton = styled(Button)`
  &:hover {
    background: rgba(4, 21, 60, 0.644);
  }
`;
const StyledMenuItem = styled(MenuItem)`
  .dropdown_link {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  &:hover {
    background: rgba(4, 21, 60, 0.644);
  }
`;

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser,
  );
  const user = useSelector((state) => userSelector(state));
  const dispatch = useDispatch();
  return (
    <div>
      <StyledButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<MdOutlineManageAccounts />}
        sx={{ backgroundColor: "#000", textTransform: "lowercase" }}
      >
        {user.username ? user.username : "My Account"}
      </StyledButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose} disableRipple>
          <Link className="dropdown_link" to="/account/watchlist">
            <BsFillHeartFill className="wishlist_icon" />
            Watchlist
          </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose} disableRipple>
          <Link className="dropdown_link" to="/account/history">
            <FaHistory className="wishlist_icon" />
            History
          </Link>
        </StyledMenuItem>
        <Divider sx={{ my: 0.5 }} />
        <StyledMenuItem onClick={handleClose} disableRipple>
          <Link to="/account/settings" className="dropdown_link">
            <MdSettings className="wishlist_icon" />
            Settings
          </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose} disableRipple>
          <span
            className="dropdown_link"
            onClick={() => dispatch(startSignOut())}
          >
            <FaSignOutAlt className="wishlist_icon" />
            Sign out
          </span>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
