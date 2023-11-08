// Main packages
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence } from "framer-motion";
// Styles
import styled, { keyframes } from "styled-components";
import { device } from "./mediaQueries";
//Components
import Nav from "./Nav";
import Shapes from "../assets/Shapes.svg";
import Letter from "../assets/letter.svg";
import Modal from "./Modal";

// Animations for different screens
const floating = keyframes`
  0% {
    bottom: calc(100% - 70px);
    left: 20%;
    width: 170px;
    border-radius: 36px;
  }

  100% {
    left: calc(100% - 80px);
    bottom: 15px;
    width: 65px;
    border-radius: 36px;
  }
`;

const floatingLaptopL = keyframes`
  0% {
    bottom: calc(100% - 130px);
    left: 20%;
    width: 170px;
  }

  100% {
    left: calc(100% - 80px);
    bottom: 15px;
    width: 65px;
  }
`;

const floatingLaptop = keyframes`
  0% {
    bottom: calc(100% - 85px);
    left: 20%;
  }

  100% {
    left: calc(100% - 72px);
    bottom: 15px;
  }
`;

const floatingTablet = keyframes`
  0% {
    bottom: calc(100% - 33px);
    left: 50%;
  }


  100% {
    left: calc(100% - 55px);
    bottom: 15px;
  }
`;

const floatingMobileS = keyframes`
  0% {
    bottom: calc(100% - 110px);
    left: 45%;
  }

  100% {
    left: calc(100% - 52px);
    bottom: 15px;
  }
`;

const HeroWrapperStyle = styled.div`
  background: linear-gradient(to right, var(--purple) 66%, #ffffff 0%);
  position: relative;

  .shapes-wrapper {
    width: 100%;
    svg {
      position: absolute;
      top: 20%;
      left: 66%;
      margin-left: -3em;
      .circleShadow {
        -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }

  .lt-btn-wrap {
    margin-top: 30%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .contact-btn {
    z-index: 1;
    padding: 15px 30px;
    letter-spacing: 1px;
    background-color: var(--blue);
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 36px;
    -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .lets-talk-button {
    margin-top: 30%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    .contact-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: calc(100% - 70px);
      left: 0%;
      width: 200px;
      border-radius: 36px;
      -webkit-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease-in-out;
      transition-property: bottom, left, width, border-radius;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;

      .letter {
        visibility: hidden;
        width: 0px;
        position: relative;
        transition: all 0.5s ease-in-out;
      }

      span {
        visibility: visible;
        font-size: 18px;
        width: 100px;
        transition: all 0.5s ease-in-out;
      }
    }
  }

  .floating {
    .contact-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      position: fixed;
      width: 65px;
      left: calc(100% - 80px);
      bottom: 15px;
      -webkit-animation: ${floating} 0.5s;
      animation: ${floating} 0.5s;
      padding: 17px 17px;
      border-radius: 36px;
      margin: 0;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;

      .letter {
        visibility: visible;
        width: 30px;
        height: 30px;
        transition: all 0.5s ease-in-out;
        color: var(--white);
      }

      span {
        visibility: hidden;
        font-size: 0px;
        width: 0px;
        transition: all 0.5s ease-in-out;
      }
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .shapes-wrapper {
      svg {
        width: 13%;
      }
    }

    .lets-talk-button {
      .contact-btn {
        bottom: calc(100% - 130px);
        left: 0%;
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 80px);
        bottom: 15px;
        -webkit-animation: ${floatingLaptopL} 0.5s;
        animation: ${floatingLaptopL} 0.5s;
      }
    }
  }

  @media ${device.laptop} {
    background: linear-gradient(to right, var(--purple) 60%, #ffffff 0%);

    .shapes-wrapper {
      svg {
        width: 10%;
        top: 0%;
        left: 60%;
        margin-left: -2em;
      }
    }

    .contact-btn {
      padding: 10px 25px;
      letter-spacing: 0.1em;
      font-weight: 500;
    }

    .lets-talk-button {
      .contact-btn {
        bottom: calc(100% - 85px);
        left: 0%;

        span {
          font-size: 15px;
        }
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 72px);
        bottom: 15px;
        -webkit-animation: ${floatingLaptop} 0.5s;
        animation: ${floatingLaptop} 0.5s;
        padding: 18px;

        .letter {
          width: 28px;
          height: 28px;
        }
      }
    }
  }

  @media ${device.tablet} {
    background: linear-gradient(to right, var(--purple) 100%, #ffffff 0%);
    .shapes-wrapper {
      svg {
        transform: rotate(90deg);
        width: 10%;
        top: 9%;
        left: 20%;
      }
    }

    .lets-talk-button {
      margin-top: 20%;
      .contact-btn {
        width: 35%;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        bottom: calc(100% - 33px);
        overflow: hidden;
        transform: translateZ(0);

        span {
          font-size: 14px;
        }
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 70px);
        bottom: 15px;
        -webkit-animation: ${floatingTablet} 0.5s;
        animation: ${floatingTablet} 0.5s;
        padding: 19px;
        overflow: hidden;
        transform: translateZ(0);

        .letter {
          width: 26px;
          height: 26px;
        }
      }
    }
  }

  @media ${device.mobileL} {
    .shapes-wrapper {
      .shape {
        height: 50%;
        top: 79%;
        width: 20%;
        left: 25%;
      }
    }

    .contact-btn {
      font-size: 13px;
      padding: 10px 20px;
      letter-spacing: 0.1em;
      font-weight: 500;
      width: 40%;
    }

    .lets-talk-button {
      margin-top: 20%;

      .contact-btn {
        bottom: calc(100% - 70px);
        padding: 5px 0px;
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 55px);
        bottom: 15px;
        -webkit-animation: ${floatingTablet} 0.5s;
        animation: ${floatingTablet} 0.5s;
        padding: 14px 14px;
        width: 48px;

        .letter {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  @media ${device.mobileM} {
    .lets-talk-button {
      margin-top: 30%;
      .contact-btn {
        width: 40%;
        bottom: calc(100% - 50px);
        padding: 5px 0px;
      }
    }

    .floating {
      .contact-btn {
        bottom: 15px;
      }
    }
  }

  @media ${device.mobileS} {
    .shapes-wrapper {
      .shape {
        left: 35%;
      }
    }

    .lets-talk-button {
      .contact-btn {
        width: 50%;
        position: absolute;
        bottom: calc(100% - 110px);

        span {
          font-size: 10px;
        }
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 52px);
        bottom: 15px;
        -webkit-animation: ${floatingMobileS} 0.5s;
        animation: ${floatingMobileS} 0.5s;
        padding: 14px 12px;
      }
    }
  }
`;

const HeroStyle = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 66% auto;

  .hero-content {
    display: grid;
    align-items: center;
    margin-top: 300px;
    margin-bottom: 400px;

    .hero-content-wrapper {
      color: var(--white);

      h1 {
        font-size: 57px;
        font-style: normal;
        font-weight: bold;
        margin: 0;
      }

      h2 {
        font-size: 1.3em;
        margin: 0;
        padding-bottom: 30px;
      }
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .hero-content {
      display: grid;
      align-items: center;
      margin-top: 250px;
      margin-bottom: 300px;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 60% auto;

    .hero-content {
      margin-top: 170px;
      margin-bottom: 200px;

      .hero-content-wrapper {
        h1 {
          font-size: 2.5em;
        }

        h2 {
          font-size: 1em;
          padding-bottom: 20px;
        }

        button {
          font-size: 15px;
          padding: 10px 20px;
        }
      }
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;

    .hero-content {
      margin-top: 40px;
      margin-bottom: 120px;

      .hero-content-wrapper {
        h1 {
          font-size: 2em;
        }
      }
    }
  }

  @media ${device.mobileM} {
    .hero-content {
      margin-top: 50px;
      margin-bottom: 100px;

      .hero-content-wrapper {
        h1 {
          font-size: 2em;
        }

        h2 {
          font-size: 0.9em;
          padding-bottom: 25px;
        }
      }
    }
  }
`;

export default function Hero() {
  // Setup to check if button is in view
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });

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

  const buttonEl = useRef(null);

  console.log(inView, modalOpen);
  return (
    <>
      <HeroWrapperStyle>
        <div className="wrapper">
          <Nav />
          <HeroStyle>
            <div ref={ref} className="hero-content">
              <div className="hero-content-wrapper">
                <h1>Hi, I'm Emils.</h1>
                <h2>Front-end web developer</h2>
              </div>
            </div>
            <div
              ref={buttonEl}
              className={inView ? "lets-talk-button" : "floating"}
            >
              <button
                className="contact-btn"
                onClick={() => {
                  modalOpen ? close() : open();
                }}
              >
                <Letter className="letter" />
                <span>LETS TALK!</span>
              </button>
            </div>
          </HeroStyle>
        </div>
        <div className="shapes-wrapper">
          <Shapes className="shape" />
        </div>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => {}}
        >
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
      </HeroWrapperStyle>
    </>
  );
}
