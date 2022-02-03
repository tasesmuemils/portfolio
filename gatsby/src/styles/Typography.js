// Style
import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { device } from "../components/mediaQueries";

const Typography = createGlobalStyle`

  * {
    font-family: "Poppins";
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 39px;
    line-height: 41px;
    letter-spacing: 0.02em;
  }

  p {
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.02em;
  }

  // Responsive design
  @media ${device.laptop} {
    h2 {
      font-size: 30px;
      line-height: 41px;
      margin: 0;
      padding-bottom: 15px;
    }

    p {
      font-size: 15px;
      line-height: 30px;
    }
  }

  @media ${device.tablet} {
    h2 {
      font-size: 25px;
      line-height: 30px;
      margin: 0;
      padding-bottom: 0px;
    }

    p {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

export default Typography;
