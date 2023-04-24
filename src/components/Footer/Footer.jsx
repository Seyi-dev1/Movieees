import React from "react";
import { MdLocalMovies, MdMailOutline } from "react-icons/md";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="first">
          <div className="title_con">
            <MdLocalMovies className="icon" />
            <div className="title">
              <span>BLOCK</span>
              <span>BUSTER</span>
              <h1>Films catalogue</h1>
            </div>
          </div>
          <span className="address">
            7th Hale end, plateau <br /> Silicon Valley, NY 12028
          </span>
          <span className="call">
            Call us: <span className="no">(+234)7010909982</span>
          </span>
        </div>
        <div className="second">
          <span className="footer_title">Account</span>
          <div className="links">
            <span className="footer_link">My Account</span>
            <span className="footer_link">Watchlist</span>
          </div>
        </div>
        <div className="second">
          <span className="footer_title">Newsletter</span>
          <div className="links">
            <span className="footer_link">
              Subscribe to our newsletter <br /> now to get latest news from us.
            </span>
            <div className="subscribe_con">
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe"
              />
              <MdMailOutline className="sub_icon" />
            </div>
            <span className="sub_btn">Subscribe Now!{" >"}</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span className="copyright">
          © 2023 Blockbuster. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
