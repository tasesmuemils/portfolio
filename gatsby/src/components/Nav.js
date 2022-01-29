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
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  color: #ffffff;

  li {
    list-style: none;
  }

  .logo-nav-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .logo {
      font-size: 1.25em;
    }

    .nav-items {
      display: flex;
      justify-content: center;

      li {
        text-align: center;
        padding: 0 1.25em;
        font-weight: 400;
        font-size: 1.5em;
        /* line-height: 36px; */
      }
    }
  }

  .nav-icons {
    display: flex;
    justify-content: end;

    li {
      padding: 0 25px;
      display: flex;
      align-items: center;

      svg {
        width: 30px;
      }
    }
  }
`;

export default function Nav() {
  return (
    <Navigation>
      <div className="logo-nav-items">
        <div className="logo">
          <h2>EB</h2>
        </div>
        <ul className="nav-items">
          <li>About</li>
          <li>Projects</li>
        </ul>
      </div>
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
