import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import "./share.scss";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Share = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="share_con">
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="share_btn"
      >
        Share
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className="menu"
      >
        <MenuItem
          className="share_menu"
          sx={{
            color: "#dd1151",
            fontSize: "13px",
            fontWeight: "600",
          }}
          onClick={handleClose}
        >
          <WhatsappIcon size={32} />
        </MenuItem>
        <MenuItem
          className="share_menu"
          sx={{
            color: "#dd1151",
            fontSize: "13px",
            fontWeight: "600",
          }}
          onClick={handleClose}
        >
          <FacebookIcon size={32} />
        </MenuItem>
        <MenuItem
          className="share_menu"
          sx={{
            color: "#dd1151",
            fontSize: "13px",
            fontWeight: "600",
          }}
          onClick={handleClose}
        >
          <TwitterIcon size={32} />
        </MenuItem>
        <MenuItem
          className="share_menu"
          sx={{
            color: "#dd1151",
            fontSize: "13px",
            fontWeight: "600",
          }}
          onClick={handleClose}
        >
          <LinkedinIcon size={32} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Share;
