import React from "react";
import "./settings.scss";
import Switch from "../../components/switch/Switch";
import {
  MdLocationPin,
  MdNotificationsActive,
  MdOutlineEmail,
  MdRateReview,
  MdVpnKey,
} from "react-icons/md";
import { BsFillShieldLockFill, BsPaletteFill } from "react-icons/bs";

import CInput from "../../components/CInput/CInput";
import CButton from "../../components/CButton/CButton";

const Settings = () => {
  const [details, setDetails] = React.useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="settings_page">
      <div className="settings_container">
        <h3 className="title">Settings</h3>
        <h3 className="subtitle">Security & Login</h3>
        <div className="security">
          <div className="security_action">
            <MdNotificationsActive className="icon" />
            <h3 className="text">Get alerts about unrecognized logins</h3>
            <Switch className="toggle" />
          </div>
          <div className="security_action">
            <BsFillShieldLockFill className="icon" />
            <h3 className="text">Use two factor authentication (OTP)</h3>
            <Switch className="toggle" />
          </div>
          <div className="security_action">
            <MdVpnKey className="icon" />
            <h3 className="text">Change Password</h3>
          </div>
          <form className="password_change">
            <CInput
              type="password"
              name="currentPassword"
              value={details.currentPassword}
              required={true}
              id="currentPassword"
              label="Current Password"
              handleChange={handleChange}
              className="input"
            />
            <CInput
              type="password"
              name="newPassword"
              value={details.newPassword}
              required={true}
              id="newPassword"
              label="New Password"
              handleChange={handleChange}
              className="input"
            />
            <CInput
              type="password"
              name="confirmPassword"
              value={details.confirmPassword}
              required={true}
              id="confirmPassword"
              label="Confirm Password"
              handleChange={handleChange}
              className="input"
            />
            <CButton text="Update password" />
          </form>
        </div>
        <h3 className="subtitle">Display</h3>
        <div className="display_container">
          <div className="display_action">
            <BsPaletteFill className="icon" />
            <h3 className="text">Switch between light and dark mode</h3>
            <Switch className="toggle" />
          </div>
        </div>
        <h3 className="subtitle">Preferences</h3>
        <div className="display_container">
          <div className="display_action">
            <MdRateReview className="icon" />
            <h3 className="text">Share your ratings on reviews you write</h3>
            <Switch className="toggle" />
          </div>
        </div>
        <div className="display_container">
          <div className="display_action">
            <MdOutlineEmail className="icon" />
            <h3 className="text">
              Send me emails on latest releases and editor's pick
            </h3>
            <Switch className="toggle" />
          </div>
        </div>
        <div className="display_container">
          <div className="display_action">
            <MdLocationPin className="icon" />
            <h3 className="text">Show your location and region</h3>
            <Switch className="toggle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
