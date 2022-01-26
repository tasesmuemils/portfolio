// Main packages
import React from "react";
// Styling
import styled from "styled-components";
// Icons
import InstagramIcon from "../assets/Instagram_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";
import TwitterIcon from "../assets/Twitter_Icon.svg";

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;

  li {
    list-style: none;
  }

  .logo,
  .nav-items,
  .nav-icons {
    display: flex;
    /* border: 1px solid red; */
  }

  .nav-items,
  .nav-icons {
    justify-content: center;
    align-items: center;
    li {
      padding: 0 10px;
    }
  }
`;

export default function Nav() {
  return (
    <Navigation>
      <div className="logo">
        <h2>EB</h2>
      </div>
      <ul className="nav-items">
        <li>About</li>
        <li>Projects</li>
      </ul>

      <ul className="nav-icons">
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
    </Navigation>
  );
}
