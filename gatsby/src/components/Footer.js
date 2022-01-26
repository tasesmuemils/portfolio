// Main packages
import React from "react";
// Components
import Shapes from "../assets/Shapes.svg";
import InstagramIcon from "../assets/Instagram_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";
import TwitterIcon from "../assets/Twitter_Icon.svg";

export default function FOOTER() {
  return (
    <div>
      <Shapes />
      <p>emils.bisenieks93@gmail.com</p>
      <ul>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <GithubIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
      <p>Created with Gatsby</p>
      <p>&#169; {new Date().getFullYear()} Emils Bisenieks</p>
    </div>
  );
}
