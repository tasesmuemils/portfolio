// Main packages
import React from "react";
import Img from "gatsby-image";
// Styling
import styled from "styled-components";
import Button from "./Button";

const ProjectStyle = styled.div`
  * {
    /* border: 1px solid red; */
    margin: 0;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 0;

  .project-info {
    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.12em;
      color: var(--blue);
    }

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 50px;
      line-height: 75px;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 35px;
      letter-spacing: 0.02em;
      color: var(--paragraphColor);
    }

    .project-logos {
      svg {
      }
    }
  }
`;

export default function Project({
  project,
  projectName,
  projectDescription,
  projectLogos,
  projectImage,
}) {
  console.log(projectImage);
  return (
    <ProjectStyle>
      <div className="project-info">
        <h5>{project}</h5>
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
        <div className="project-logos">{projectLogos}</div>
        <div>
          <Button text="Preview" />
          <Button text="Code" />
        </div>
      </div>
      <div>
        <Img fluid={projectImage.node.fluid} />
      </div>
    </ProjectStyle>
  );
}
