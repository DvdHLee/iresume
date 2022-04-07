import React from "react";

import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="contact">
      <p className="contacttitle">Contact</p>
      <div className="contactblock">
        <div className="contactrow">
          <img
            className="icon"
            src="/assets/Icons/mail.png"
            alt="this is a mail icon"
          />
          <p className="contactinfo">dvdhyelee@gmail.com</p>
        </div>
        <div className="contactrow">
          <img
            className="icon"
            src="/assets/Icons/linkedin.png"
            alt="this is a linkedin icon"
          />
          <p className="contactinfo">https://www.linkedin.com/dvdhyelee</p>
        </div>
        <div className="contactrow">
          <img
            className="icon"
            src="/assets/Icons/github.png"
            alt="this is a github icon"
          />
          <a className="contactinfo" href="https://github.com/DvdHLee" title="">https://github.com/DvdHLee</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;