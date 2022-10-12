import React, { useState } from "react";

const Footer = () => {
  return (
    <div className="site-footer d-flex flex-column" id="social">
      <h6>Kontakti</h6>
      <div className="">
        <p className="text-justify">
          +385 91 506 29 40
          <br />
          Trodhemska 10, 21000 Split
          <br />
          danceboxsplit1@gmail.com
        </p>
      </div>
      <div className="social-container">
        <a
          className={"ml-1"}
          href="https://www.facebook.com/PlesniStudioDanceBox"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook fa-2x fb"></i>
        </a>
        <a
          href="https://www.instagram.com/danceboxsplit/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram fa-2x ig mx-3"></i>
        </a>
        <a
          href="https://www.youtube.com/user/25imami/videos"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-youtube fa-2x yt"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
