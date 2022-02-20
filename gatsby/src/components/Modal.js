// Main packages
import React from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import { useForm } from "react-hook-form";
// Styling
import styled from "styled-components";
import { device } from "./mediaQueries";
// Components
import CloseSvg from "../assets/close_modal.svg";
import ErrorSvg from "../assets/error.svg";
import SuccessSvg from "../assets/success.svg";

const ModalStyle = styled.div`
  position: relative;
  background-color: var(--white);
  padding: 20px 50px;

  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));

  .close-modal-wrapper {
    position: relative;
    padding: 10px 0;
    svg {
      position: absolute;
      right: 0;
      path {
        fill: #5d5d5d;
      }
    }
    svg:hover {
      cursor: pointer;
      path {
        fill: #363636;
        transition: all 0.3s ease;
      }
    }
  }

  .modal-intro {
    text-align: center;
    padding-top: 30px;
    * {
      margin: 0;
    }

    h1 {
      letter-spacing: 0.75px;
    }

    p {
      font-size: 15px;
    }
  }

  .email-form {
    padding: 40px 40px 30px 40px;

    .form-content-wrapper {
      .form-label-input {
        position: relative;
        margin: 10px auto 50px auto;

        .form-control {
          display: block;
          line-height: 2em;
          margin: 0;
          padding-left: 3px;
          width: 100%;
          font-size: 15px;
          border: none;
          border-bottom: 1px solid #c9c9cb;
          background-color: none;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          font-weight: 500;
        }

        .form-control:focus {
          outline: none;
          border-bottom: 1px solid #000000;
          transition: all 0.5s;
        }

        .control-label {
          display: block;
          position: absolute;
          opacity: 0;
          bottom: 1.9rem;
          color: #5d5d5d;
          transition: 0.2s ease-in-out transform;
          font-size: 12px;
        }

        .textarea-control-label {
          display: block;
          position: absolute;
          opacity: 0;
          bottom: 100%;
          color: #5d5d5d;
          transition: 0.2s ease-in-out transform;
          font-size: 12px;
        }

        .form-control:placeholder-shown + .control-label,
        .form-control:placeholder-shown + .textarea-control-label {
          visibility: hidden;
          z-index: -1;
          transition: 0.2s ease-in-out;
        }
        .form-control:not(:placeholder-shown) + .control-label,
        .form-control:focus:not(:placeholder-shown) + .control-label {
          visibility: visible;
          z-index: 1;
          opacity: 1;
          transform: translateY(-10px);
          transition: 0.2s ease-in-out transform;
        }

        .form-control:not(:placeholder-shown) + .textarea-control-label,
        .form-control:focus:not(:placeholder-shown) + .textarea-control-label {
          visibility: visible;
          z-index: 1;
          opacity: 1;
          transform: translateY(-10px);
          transition: 0.2s ease-in-out transform;
        }

        .input-error-wrapper {
          position: absolute;
          top: 5px;
          left: -10%;
          display: flex;
          align-items: center;

          .error {
            path {
              fill: #ef0000;
            }
          }
        }

        .error-msg-wrapper {
          position: absolute;
          .error-msg {
            font-size: 12px;
            color: #ef0000;
          }
        }
      }
    }

    .send-message-button {
      padding: 10px 0 40px 0;
      #submit-btn {
        font-size: 12px;
        letter-spacing: 2px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        padding: 15px 30px;
        background-color: var(--blue);
        color: white;
        cursor: pointer;
        border: none;
        border-radius: 36px;
        box-shadow: 10px 16px 40px 0 rgba(12, 36, 232, 0.46);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }

    .success {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      text-align: center;
      svg {
        width: 50px;
        height: 50px;
        path {
          fill: var(--blue);
          fill-opacity: 1;
        }
      }
      p {
        width: 100%;
        font-size: 20px;
      }
    }
  }

  @media ${device.mobileL} {
    padding: 10px 15px;

    .close-modal-wrapper {
      svg {
        top: 20px;
      }
    }
    .email-form {
      padding: 20px 20px 10px 20px;

      .form-content-wrapper {
        .form-label-input {
          .input-error-wrapper {
            display: none;
          }
        }
      }

      .send-message-button {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media ${device.mobileS} {
    padding: 10px 15px;

    .email-form {
      padding: 20px 20px 10px 20px;
    }
  }
`;

const Modal = ({ handleClose }) => {
  // Handle form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
    React.useState(false);

  console.log(errors);
  // Modal animation object
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "string",
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <ModalBackdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalStyle>
          <div className="close-modal-wrapper">
            <CloseSvg onClick={handleClose} />
          </div>
          <div className="modal-intro">
            <h1>Lets talk!</h1>
            <p>I will get back to you within one to two days through email.</p>
          </div>
          <form
            onSubmit={handleSubmit((data) => {
              data
                ? setIsSuccessfullySubmitted(true)
                : setIsSuccessfullySubmitted(false);
            })}
            className="email-form"
            action="https://formsubmit.co/2055f14f29843faf72a13ac2f96eae67"
            method="POST"
          >
            {isSuccessfullySubmitted ? (
              <div className="success">
                <div>
                  <SuccessSvg />
                </div>
                <p>Message sent</p>
              </div>
            ) : (
              <>
                <div className="form-content-wrapper">
                  <div className="form-label-input">
                    <input
                      {...register("name", {
                        required: "Please fill out this field",
                        minLength: {
                          value: 4,
                          message: "Min lenght is 4 letters",
                        },
                      })}
                      name="name"
                      type="text"
                      placeholder="Name *"
                      className="form-control"
                    />
                    <label htmlFor="name" className="control-label">
                      Name
                    </label>
                    <div className="input-error-wrapper">
                      {errors.name?.message === undefined ? (
                        ""
                      ) : (
                        <ErrorSvg className="error" />
                      )}
                    </div>
                    <div className="error-msg-wrapper">
                      <span className="error-msg">
                        {errors.name?.message === undefined
                          ? ""
                          : errors.name?.message}
                      </span>
                    </div>
                  </div>
                  <div className="form-label-input">
                    <input
                      {...register("email", {
                        required: "Please fill out this field",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // eslint-disable-line
                          message: "Please enter valid email.",
                        },
                      })}
                      name="email"
                      type="text"
                      placeholder="E-mail *"
                      className="form-control"
                    />
                    <label htmlFor="email" className="control-label">
                      Email
                    </label>
                    <div className="input-error-wrapper">
                      {errors.email?.message === undefined ? (
                        ""
                      ) : (
                        <ErrorSvg className="error" />
                      )}
                    </div>
                    <div className="error-msg-wrapper">
                      <span className="error-msg">
                        {errors.email?.message === undefined
                          ? ""
                          : errors.email?.message}
                      </span>
                    </div>
                  </div>
                  <div className="form-label-input">
                    <input
                      {...register("subject", {
                        required: "Please fill out this field",
                        minLength: {
                          value: 4,
                          message: "Min lenght is 4 letters",
                        },
                      })}
                      name="subject"
                      type="text"
                      placeholder="Subject *"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="control-label">
                      Subject
                    </label>
                    <div className="input-error-wrapper">
                      {errors.subject?.message === undefined ? (
                        ""
                      ) : (
                        <ErrorSvg className="error" />
                      )}
                    </div>
                    <div className="error-msg-wrapper">
                      <span className="error-msg">
                        {errors.subject?.message === undefined
                          ? ""
                          : errors.subject?.message}
                      </span>
                    </div>
                  </div>
                  <div className="form-label-input">
                    <textarea
                      {...register("message", {
                        required: "Please fill out this field",
                        minLength: {
                          value: 10,
                          message: "Min lenght is 10 letters",
                        },
                      })}
                      placeholder="Message *"
                      className="form-control"
                      name="message"
                      cols="30"
                      rows="3"
                    ></textarea>
                    <label htmlFor="message" className="textarea-control-label">
                      Message
                    </label>
                    <div className="input-error-wrapper">
                      {errors.message?.message === undefined ? (
                        ""
                      ) : (
                        <ErrorSvg className="error" />
                      )}
                    </div>
                    <div className="error-msg-wrapper">
                      <span className="error-msg">
                        {errors.message?.message === undefined
                          ? ""
                          : errors.message?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="send-message-button">
                  <input id="submit-btn" type="submit" value="SEND MESSAGE" />
                </div>
              </>
            )}
          </form>
        </ModalStyle>
      </motion.div>
    </ModalBackdrop>
  );
};

export default Modal;
