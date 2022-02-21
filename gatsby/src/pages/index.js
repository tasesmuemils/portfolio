// Main packages
import React from "react";
import { graphql } from "gatsby";

// Compoents
import Hero from "../components/Hero";
import About from "../components/About";
import Tools from "../components/Tools";
import Projects from "../components/Projects";

export default function HomePage({ data }) {
  console.log(data);
  return (
    <>
      <Hero />
      <About />
      <Tools />
      <Projects projectsImg={data.allImageSharp.edges} />
    </>
  );
}

// Query for Project images
export const query = graphql`
  query ProjectImages {
    allImageSharp(sort: { fields: fluid___originalName, order: ASC }) {
      edges {
        node {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`;
