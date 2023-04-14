import React from "react";
import { MdLocalMovies } from "react-icons/md";
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
          <span className="footer_title">Resources</span>
          <div className="links">
            <span className="footer_link">About</span>
            <span className="footer_link">Blockbuster</span>
            <span className="footer_link">Contact Us</span>
            <span className="footer_link">Forums</span>
            <span className="footer_link">Blog</span>
            <span className="footer_link">Help Center</span>
          </div>
        </div>
        <div className="second">
          <span className="footer_title">Legal</span>
          <div className="links">
            <span className="footer_link">Terms of Use</span>
            <span className="footer_link">Privacy Policy</span>
            <span className="footer_link">Security</span>
          </div>
        </div>
        <div className="second">
          <span className="footer_title">Account</span>
          <div className="links">
            <span className="footer_link">My Account</span>
            <span className="footer_link">Watchlist</span>
            <span className="footer_link">Collections</span>
            <span className="footer_link">User Guide</span>
          </div>
        </div>
        <div className="second">
          <span className="footer_title">Newsletter</span>
          <div className="links">
            <span className="footer_link">
              Subscribe to our newsletter system now to get latest news from us.
            </span>
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
