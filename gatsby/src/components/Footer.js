// Main packages
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
// Components
import Modal from "./Modal";
import Shapes from "../assets/Shapes.svg";
import InstagramIcon from "../assets/Instagram_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";
import TwitterIcon from "../assets/Twitter_Icon.svg";
// Styles
import styled from "styled-components";
import { device } from "./mediaQueries";

const FooterStyle = styled.div`
  z-index: 1;
  background-color: var(--purple);
  .shapes-wrapper {
    position: absolute;
    bottom: 6em;
    left: 3em;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    svg {
      width: 65%;
      .circleShadow {
        -webkit-filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));
        filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));
      }
    }
  }

  .footer-content {
    display: grid;
    text-align: center;
    color: var(--white);
    padding-top: 150px;
    padding-bottom: 50px;
    * {
      margin: 0;
    }

    .footer-btn-wrapper {
      padding-bottom: 30px;
      button {
        font-size: 20px;
        padding: 15px 30px;
        letter-spacing: 1px;
        transition: all 0.5s ease;
        background-color: var(--blue);
        color: white;
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 36px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }

    .footer-icons-list {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 30px;
      li {
        list-style: none;
        padding: 0 20px;
        svg path {
          fill: var(--white);
        }
      }
    }

    .footer-description {
      p {
        margin: 0;
        padding: 0;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        letter-spacing: 0.03em;
      }
    }
  }

  // Responsive styling
  @media ${device.laptop} {
    .shapes-wrapper {
      bottom: -1em;
      left: 2em;
      svg {
        width: 50%;
      }
    }

    .footer-content {
      padding-top: 100px;
      padding-bottom: 50px;

      .footer-btn-wrapper {
        padding-bottom: 10px;
        button {
          font-size: 15px;
          padding: 10px 25px;
          letter-spacing: 0.1em;
          font-weight: 500;
        }
      }

      .footer-icons-list {
        padding-bottom: 20px;
        li {
          padding: 0 15px;
          svg {
            width: 20px;
          }
        }
      }

      .footer-description {
        p {
          font-size: 12px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .shapes-wrapper {
      bottom: 8.2em;
      left: 3em;
      svg {
        height: 100%;
        width: 30%;
      }
    }

    .footer-content {
      padding-top: 70px;

      .email {
        font-size: 18px;
      }
    }
  }
  @media ${device.mobileL} {
    .shapes-wrapper {
      bottom: 8em;
      left: 0em;
      svg {
        width: 30%;
      }
    }

    .footer-content {
      .footer-btn-wrapper {
        button {
          font-size: 13px;
          padding: 10px 20px;
          letter-spacing: 0.1em;
          font-weight: 500;
          transition: all 0.5s ease;
        }
      }
    }
  }

  @media ${device.mobileM} {
    .shapes-wrapper {
      bottom: 8.7em;

      svg {
        width: 25%;
      }
    }

    .footer-content {
      .email {
        font-size: 10px;
      }

      .footer-description {
        p {
          font-size: 10px;
        }
      }
    }
  }

  @media ${device.mobileS} {
    .shapes-wrapper {
      bottom: 9em;
      left: -3em;

      svg {
        width: 20%;
      }
    }
  }
`;

export default function Footer(props) {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  // Disable background scrolling, when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalOpen]);

  return (
    <FooterStyle>
      <div className="wrapper">
        <div className="shapes-wrapper">
          <Shapes />
        </div>

        <div className="footer-content">
          <div className="footer-btn-wrapper">
            <button
              onClick={() => {
                modalOpen ? close() : open();
              }}
            >
              LETS TALK!
            </button>
          </div>

          <ul className="footer-icons-list">
            <li>
              <a
                href="https://www.instagram.com/tasesmuemils/"
                rel="noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tasesmuemils"
                rel="noreferrer"
                target="_blank"
                aria-label="Github"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://mobile.twitter.com/tasesmuemils"
                rel="noreferrer"
                target="_blank"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            </li>
          </ul>
          <div className="footer-description">
            <p>Created with Gatsby</p>
            <p>&#169; {new Date().getFullYear()} Emils Bisenieks</p>
          </div>
        </div>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => {}}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </FooterStyle>
  );
}
