// Style
import { createGlobalStyle } from "styled-components";
import { device } from "../components/mediaQueries";
// Styling
import "normalize.css";
const GlobalStyles = createGlobalStyle`

    * {
        /* border: 1px solid red; */
    }

    html, body {
        overflow-x: hidden;
    }
    

    :root {
        // Define main colors
        --purple: #620CE8;
        --pink: #D00CE8;
        --blue: #0C24E8;
        --lighter-blue: #4A30F7;
        --orange: #FB9E28;
        --paragraphColor: #333333;
        --white: #ffffff;
    }

    .wrapper {
        position: relative;
        max-width: 1350px;
        margin: 0 auto;

        @media ${device.laptopL} {
            max-width: 950px;
        }

        @media ${device.laptop} {
            max-width: 700px;
        }

        @media ${device.mobileS} {
            max-width: 240px;
        }
    }

    

`;

export default GlobalStyles;
