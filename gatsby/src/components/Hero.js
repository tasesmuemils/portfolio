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

const floating = keyframes`
  0% {
    /* position: fixed; */
    overflow: hidden;
    bottom: calc(100% - 70px);
    left: 20%;
    
  }

  100% {
    /* position: fixed; */
    left: calc(100% - 80px);
    bottom: 15px;
  }
`;

const floatingLaptopL = keyframes`
  0% {
    /* overflow: hidden;
    -webkit-overflow-scrolling: touch; */
    /* position: fixed; */
    bottom: calc(100% - 130px);
    left: 20%;
  }

  100% {
    /* overflow: hidden;
    -webkit-overflow-scrolling: touch; */
    /* position: fixed; */
    left: calc(100% - 80px);
    bottom: 15px;
  }
`;

const floatingLaptop = keyframes`
  0% {
    /* overflow: hidden;
    -webkit-overflow-scrolling: touch; */
    /* position: fixed; */
    bottom: calc(100% - 75px);
    left: 20%;
  }

  100% {
    /* overflow: hidden;
    -webkit-overflow-scrolling: touch; */
    /* position: fixed; */
    left: calc(100% - 65px);
    bottom: 15px;
  }
`;

const floatingTablet = keyframes`
  0% {
    /* overflow: hidden;
    -webkit-overflow-scrolling: touch; */
    position: fixed;
    bottom: calc(100% - 33px);
    left: 50%;
  }


  100% {
    /* overflow: hidden;
    -webkit-overflow-scrolling: touch; */
    position: fixed;
    left: calc(100% - 65px);
    bottom: 15px;
  }
`;

const floatingMobileS = keyframes`
  0% {
    /* overflow: hidden;
    -webkit-overflow-scrolling: touch; */
    /* position: fixed; */
    bottom: calc(100% - 80px);
    left: 45%;
    width: 0px;
  }

  100% {
    /* overflow: hidden;
    -webkit-overflow-scrolling: touch; */
    /* position: fixed; */
    left: calc(100% - 45px);
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
    font-size: 20px;
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
      position: absolute;
      bottom: calc(100% - 70px);
      left: 0%;
      -webkit-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease-in-out;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;

      span {
        transition: all 0.5s ease-in-out;
      }
    }
  }

  .floating {
    .contact-btn {
      z-index: 1;
      position: fixed;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      left: calc(100% - 80px);
      bottom: 15px;
      -webkit-animation: ${floating} 0.5s;
      animation: ${floating} 0.5s;
      padding: 20px;
      border-radius: 50%;
      margin: 0;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;

      .letter {
        width: 30px;
        height: 30px;
        border-radius: 70%;
        vertical-align: middle;
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
      font-size: 15px;
      padding: 10px 25px;
      letter-spacing: 0.1em;
      font-weight: 500;
      /* transition: all 0.5s ease; */
    }

    .lets-talk-button {
      .contact-btn {
        bottom: calc(100% - 75px);
        left: 0%;
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 65px);
        bottom: 15px;
        -webkit-animation: ${floatingLaptop} 0.5s;
        animation: ${floatingLaptop} 0.5s;
        padding: 15px;

        .letter {
          width: 25px;
          height: 25px;
          border-radius: 70%;
          vertical-align: middle;
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
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 65px);
        bottom: 15px;
        -webkit-animation: ${floatingTablet} 0.5s;
        animation: ${floatingTablet} 0.5s;
        padding: 15px;
        overflow: hidden;
        transform: translateZ(0);
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
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 65px);
        bottom: 15px;
        -webkit-animation: ${floatingTablet} 0.5s;
        animation: ${floatingTablet} 0.5s;
        padding: 15px;
      }
    }
  }

  @media ${device.mobileM} {
    .lets-talk-button {
      margin-top: 30%;
      .contact-btn {
        width: 40%;
        bottom: calc(100% - 50px);
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
    .contact-btn {
      font-size: 10px;
    }
    .lets-talk-button {
      .contact-btn {
        width: 50%;
        position: absolute;
        bottom: calc(100% - 80px);
      }
    }

    .floating {
      .contact-btn {
        z-index: 1;
        position: fixed;
        left: calc(100% - 45px);
        bottom: 15px;
        -webkit-animation: ${floatingMobileS} 0.5s;
        animation: ${floatingMobileS} 0.5s;
        padding: 15px;

        .letter {
          width: 15px;
          height: 15px;
          border-radius: 70%;
          vertical-align: middle;
        }
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

      h3 {
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

        h3 {
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
          font-size: 1.5em;
        }

        h3 {
          font-size: 0.7em;
          padding-bottom: 15px;
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

  // Disable background scrolling
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalOpen]);

  const buttonEl = useRef(null);

  // useEffect(() => {
  //   document.body.className = "controlAnimation";
  //   buttonEl.current.className = "lt-btn-wrap";
  //   const timer = setTimeout(() => {
  //     document.body.className = "";
  //     // buttonEl.current.className = "";
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);

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
                <h3>Learning front-end web development</h3>
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
                {inView ? (
                  <span>LETS TALK!</span>
                ) : (
                  <Letter className="letter" />
                )}
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
