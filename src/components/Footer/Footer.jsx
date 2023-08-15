// import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="socials">
        <a
          href="https://web.facebook.com/chiadikobi.ihecherobi/"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href='https://twitter.com/NoSecondChance7" target="_blank"'
          rel="noreferrer"
          className="twitter"
        >
          <FaTwitter />
        </a>
        <a
          href='https://www.linkedin.com/in/leonard-ihecherobi-9b57149/" target="_blank"'
          rel="noreferrer"
          className="linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href='https://www.instagram.com/tracepath/" target="_blank"'
          rel="noreferrer"
          className="instagram"
        >
          <FaInstagram />
        </a>
        <a
          href='https://www.youtube.com/channel/UCcQiOUaMLkJpCi2OfiQsVWQ" target="_blank"'
          rel="noreferrer"
          className="youtube"
        >
          <FaYoutube />
        </a>
        {/* <a
          href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank"'
          rel="noreferrer"
          className="youtube"
        ><FcGoogle/></a> */}
      </div>
      <div className="copyrights">
        <p className="footer_text">Mazi Chiadi L Mbibi</p>
        <p className="copyright">&copy;<span className="year">{currentYear}</span></p>
      </div>
    </footer>
  );
};

export default Footer;
