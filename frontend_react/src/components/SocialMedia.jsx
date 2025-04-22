import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        {" "}
        <a
          href="https://x.com/iam_nyaw?s=21&t=Q7rGueS9AWx0_HcINp3S6w"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        {" "}
        <a
          href="https://www.instagram.com/iam_nyaw?igsh=b2s4M2dpYzY3OHNw&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        {" "}
        <a
          href="http://linkedin.com/in/isaac-botwe-5bb926153"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />{" "}
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
