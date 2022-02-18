// Main packages
import React from "react";
// Styling
import styled from "styled-components";
import { device } from "./mediaQueries";
// Icons
import InstagramIcon from "../assets/Instagram_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";
import TwitterIcon from "../assets/Twitter_Icon.svg";
// Components
import Logo from "../assets/EB_logo.svg";

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  color: var(--white);
  padding-top: 10px;

  li {
    list-style: none;
  }

  .logo-nav-items {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      svg {
        width: 15%;
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

      svg:hover {
        path {
          fill: var(--purple);
          transition: all 0.2s ease;
        }
      }
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .logo-nav-items {
      .logo {
        svg {
          width: 20%;
        }
      }
    }
  }

  @media ${device.laptop} {
    .logo-nav-items {
      .logo {
        display: flex;
        align-items: center;
        h2 {
          font-size: 1.5em;
          padding: 0;
          margin: 0;
        }
      }
    }

    .nav-icons {
      li {
        padding: 0 15px;
        display: flex;
        align-items: right;

        svg {
          width: 20px;
        }
      }
    }
  }

  @media ${device.tablet} {
    padding: 20px;
    grid-template-columns: 1fr;
    text-align: center;
    /* grid-template-columns: 1fr; */
    justify-content: center;

    .logo-nav-items {
      .logo {
        display: flex;
        justify-content: center;
        text-align: center;
        svg {
          width: 15%;
        }
      }
    }

    .nav-icons {
      display: none;
    }
  }

  @media ${device.mobileL} {
    .logo-nav-items {
      .logo {
        svg {
          width: 20%;
        }
      }
    }
  }

  @media ${device.mobileS} {
    padding: 0 5px;
    grid-template-columns: 1fr;

    .logo-nav-items {
      padding-top: 10px;
      grid-template-columns: 1fr;
      .logo {
        svg {
          margin: 0 auto;
        }
      }
      .nav-items {
        justify-content: center;
        li {
          margin: 0 0 0 10px;
          font-size: 15px;
        }
      }
    }
  }
`;

export default function Nav() {
  return (
    <Navigation>
      <div className="logo-nav-items">
        <div className="logo">
          <Logo />
        </div>
        {/* <ul className="nav-items">
          <Link to="/#about">
            <li>About</li>
          </Link>
          <Link to="/#projects">
            <li>Projects</li>
          </Link>
        </ul> */}
      </div>
      <ul className="nav-icons">
        <li>
          <a
            href="https://www.instagram.com/tasesmuemils/"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tasesmuemils"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://mobile.twitter.com/tasesmuemils"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Navigation>
  );
}
