import * as React from "react";
import { Link } from "gatsby";
import Logo from "../assets/EB_logo.svg";

// styles
const logoStyle = {
  padding: "30px",
  backgroundColor: "#620CE8",
  "& path": {
    fill: "black",
  },
};

const pageStyles = {
  color: "#232129",

  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  padding: "20px 30px 0px 30px",
};

const paragraphStyles = {
  marginBottom: 48,
  padding: "0px 30px 50px 30px",
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <div style={logoStyle}>
        <Logo />
      </div>
      <title>Not found</title>

      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? <></> : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
