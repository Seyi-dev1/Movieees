import React from "react";
import "./account.scss";
const Account = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="account_page">
      <span>my Account</span>
    </div>
  );
};

export default Account;
