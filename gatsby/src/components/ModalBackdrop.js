// Main packages
import React from "react";
import { motion } from "framer-motion";

// Styling
import { device } from "./mediaQueries";
import styled from "styled-components";

const ModalBackdropStyle = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #00000097;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .modal {
    margin: auto 10px;
  }

  @media ${device.mobileS} {
    .modal {
      height: 100%;
    }
  }
`;

const ModalBackdrop = ({ children, onClick }) => {
  return (
    <ModalBackdropStyle>
      <motion.div
        className="backdrop"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </ModalBackdropStyle>
  );
};
export default ModalBackdrop;
