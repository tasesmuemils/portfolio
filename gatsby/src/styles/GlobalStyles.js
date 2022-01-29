import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        /* border: 1px solid red; */
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
        max-width: 1200px;
        margin: 0 auto;
    }

`;

export default GlobalStyles;
