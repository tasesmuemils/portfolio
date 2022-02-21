// Main packages
import React from "react";
// Components
import Project from "./Project";
import Project1Icons from "../assets/Project_1_logos.svg";
import Project2Icons from "../assets/Project_2_logos.svg";
import Project3Icons from "../assets/Project_3_logos.svg";
//Styling
import styled from "styled-components";
import { device } from "./mediaQueries";
// Components
import ElipseOrange from "./ElipseOrange";
import ElipseBlue from "./ElipseBlue";

const ProjectsStyle = styled.div`
  position: relative;
  overflow: hidden;

  .projects-wrapper {
    padding: 500px 0 0px 0;
  }

  // Responsive style
  @media ${device.laptop} {
    .projects-wrapper {
      padding: 300px 0 0px 0;
    }
  }
  @media ${device.tablet} {
    .projects-wrapper {
      padding: 200px 0 0px 0;
    }
  }

  @media ${device.mobileL} {
    .projects-wrapper {
      padding: 180px 0 50px 0;
    }
  }

  @media ${device.mobileM} {
    .projects-wrapper {
      padding: 150px 0 50px 0;
    }
  }

  @media ${device.mobileS} {
    .projects-wrapper {
      padding: 120px 0 50px 0;
    }
  }
`;

export default function Projects({ projectsImg }) {
  console.log(projectsImg);
  return (
    <ProjectsStyle>
      <ElipseOrange top="-5%" left="80%" />
      <ElipseBlue top="20%" left="-11%" />
      <ElipseBlue top="50%" left="45%" />
      <ElipseOrange top="80%" left="-5%" />
      <div className="wrapper">
        <div className="projects-wrapper" id="projects">
          <Project
            project="WEBSITE"
            projectName="Zeltabele.lv"
            projectDescription="My first project for client. Website for kindergarten. A fully responsive website with many pages, implemented CMS for content editing"
            projectLogos={<Project1Icons />}
            projectImage={projectsImg[0]}
            projectLink={"https://www.zeltabele.lv/"}
          />
          <Project
            project="WEB APP"
            projectName="Pokedex"
            projectDescription="Web application to check stats about first generation pokemons."
            projectLogos={<Project2Icons />}
            projectImage={projectsImg[1]}
            projectLink={
              "https://tasesmuemils.github.io/projects/pokemon_app/index.html"
            }
            projectCode={
              "https://github.com/tasesmuemils/tasesmuemils.github.io/tree/master/projects/pokemon_app"
            }
          />
          <Project
            project="WEB APP"
            projectName="Top Spotify Songs"
            projectDescription="Check your top Spotify tracks based on calculated affinity."
            projectLogos={<Project3Icons />}
            projectImage={projectsImg[2]}
            projectLink={"https://spotify-stats-app-blue.vercel.app/"}
            projectCode={"https://github.com/tasesmuemils/spotify-stats-app"}
          />
        </div>
      </div>
    </ProjectsStyle>
  );
}
