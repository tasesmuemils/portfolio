// Main packages
import React from "react";
import Img from "gatsby-image";
// Styling
import styled from "styled-components";
import { device } from "./mediaQueries";
// Components
import Button from "./Button";

const ProjectStyle = styled.div`
  * {
    margin: 0;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 300px;

  .project-info {
    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.12em;
      color: var(--blue);
      padding-bottom: 5;
    }

    p {
      color: var(--paragraphColor);
      padding: 20px 50px 20px 0;
    }

    .project-logos {
      padding-bottom: 15px;
    }

    .buttons-wrapper {
      button {
        font-size: 19px;
        text-align: center;
        padding: 10px 30px;
        margin-right: 20px;
        font-style: normal;
        font-weight: 500;
      }
    }
  }

  .project-img-wrapper {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    img {
      border-radius: 20px;
    }
  }

  // Responsive design
  @media ${device.laptop} {
    grid-template-columns: 1fr;
    text-align: center;
    padding-bottom: 150px;

    .project-info {
      padding-bottom: 15px;
      h5 {
        font-size: 18px;
        line-height: 25px;
      }

      h2 {
        padding-bottom: 10px;
      }

      p {
        text-align: center;
        padding: 10px 0;
      }

      .buttons-wrapper {
        button {
          font-size: 17px;
          margin: 0 15px;
        }
      }
    }

    .project-img-wrapper {
      padding: 20px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
  }

  @media ${device.tablet} {
    margin: 0 30px;
    padding-bottom: 100px;

    .project-info {
      padding-bottom: 15px;
      h5 {
        font-size: 15px;
        line-height: 20px;
      }

      h2 {
        padding-bottom: 5px;
      }

      p {
        text-align: center;
        padding: 10px 0 10px 0;
      }

      .project-logos {
        svg {
          margin: auto;
          width: 20%;
        }
      }

      .buttons-wrapper {
        button {
          font-size: 15px;
          margin: 0 15px;
        }
      }
    }

    .project-img-wrapper {
      padding: 20px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
  }

  @media ${device.mobileL} {
    padding-bottom: 80px;
    .project-info {
      padding-bottom: 10px;

      .project-logos {
        svg {
          width: 30%;
        }
      }
    }
  }

  @media ${device.mobileM} {
    margin: 0 10px;
    .project-info {
      .project-logos {
        svg {
          width: 35%;
        }
      }
      .buttons-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        button {
          margin: 0 auto 10px auto;
          width: 50%;
          font-size: 13px;
        }
      }
    }

    .project-img-wrapper {
      padding: 5px;
    }
  }

  @media ${device.mobileS} {
    padding-bottom: 50px;
    margin: 0 10px;
    .project-info {
      .project-logos {
        svg {
          width: 60%;
        }
      }
      .buttons-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        button {
          margin: 0 auto 10px auto;
          width: 60%;
          font-size: 13px;
        }
      }
    }

    .project-img-wrapper {
      padding: 5px;
    }
  }
`;

export default function Project({
  project,
  projectName,
  projectDescription,
  projectLogos,
  projectImage,
  projectLink,
  projectCode,
}) {
  console.log(projectImage);
  return (
    <ProjectStyle>
      <div className="project-info">
        <h5>{project}</h5>
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
        <div className="project-logos">{projectLogos}</div>
        <div className="buttons-wrapper">
          <a href={projectLink} rel="noreferrer" target="_blank">
            <Button text="Preview" />
          </a>
          {projectName === "Zeltabele.lv" ? (
            ""
          ) : (
            <a href={projectCode} rel="noreferrer" target="_blank">
              <Button text="Code" />
            </a>
          )}
        </div>
      </div>
      <div className="project-img-wrapper">
        <Img fluid={projectImage.node.fluid} />
      </div>
    </ProjectStyle>
  );
}
