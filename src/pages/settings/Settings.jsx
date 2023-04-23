import React from "react";
import "./settings.scss";
const Settings = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="settings_page">Settings</div>;
};

export default Settings;
