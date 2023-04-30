import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { MdEditDocument } from "react-icons/md";
import { grey } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";
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
  padding: 5px;
  font-size: 20px;
  width: fit-content;
  background: none;
  padding: "0px 0px";
  width: "20px";
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

export default function CustomizedLoginMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

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
        sx={{
          backgroundColor: "transparent",
          textTransform: "lowercase",

          padding: "0px 0px",
          margin: 0,
        }}
      >
        <FaUserCircle />
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
          <span className="dropdown_link" onClick={() => navigate("/login")}>
            <FaSignInAlt className="wishlist_icon" />
            Sign In
          </span>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose} disableRipple>
          <span className="dropdown_link">
            <MdEditDocument className="wishlist_icon" />
            Docs
          </span>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
