// Main packages
import React from "react";
// Components
import Project from "./Project";
import Project1Icons from "../assets/Project_1_logos.svg";
import Project2Icons from "../assets/Project_2_logos.svg";
import Project3Icons from "../assets/Project_3_logos.svg";
//Styling
import styled from "styled-components";
// Components
import ElipseOrange from "./ElipseOrange";

const ProjectsStyle = styled.div`
  .projects-wrapper {
    padding: 340px 0 100px 0;
  }
`;

export default function Projects({ projectsImg }) {
  return (
    <ProjectsStyle>
      <ElipseOrange />
      <div className="wrapper">
        <div className="projects-wrapper">
          <Project
            project="WEBSITE"
            projectName="zeltabele.lv"
            projectDescription="My first project for client. Website for kindergarten. A fully responsive website with many pages, implemented CMS for content editing"
            projectLogos={<Project1Icons />}
            projectImage={projectsImg[0]}
          />
          <Project
            project="WEB APP"
            projectName="Pokedex"
            projectDescription="Web application to check stats about first generation pokemons."
            projectLogos={<Project2Icons />}
            projectImage={projectsImg[1]}
          />
          <Project
            project="WEB APP"
            projectName="Top Spotify Songs"
            projectDescription="Check your top Spotify tracks based on calculated affinity."
            projectLogos={<Project3Icons />}
            projectImage={projectsImg[2]}
          />
        </div>
      </div>
    </ProjectsStyle>
  );
}
