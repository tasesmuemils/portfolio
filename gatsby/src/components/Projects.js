// Main packages
import React from "react";
// Components
import Project from "./Project";
import Project1Icons from "../assets/Project_1_logos.svg";
import Project2Icons from "../assets/Project_2_logos.svg";
import Project3Icons from "../assets/Project_3_logos.svg";

export default function Projects() {
  return (
    <div>
      <Project
        project="WEBSITE"
        projectName="zeltabele.lv"
        projectDescription="My first project for client. Website for kindergarten. A fully responsive website with many pages, implemented CMS for content editing"
        projectLogos={<Project1Icons />}
      />
      <Project
        project="WEB APP"
        projectName="Pokedex"
        projectDescription="Web application to check stats about first generation pokemons."
        projectLogos={<Project2Icons />}
      />
      <Project
        project="WEB APP"
        projectName="Top Spotify Songs"
        projectDescription="Check your top Spotify tracks based on calculated affinity."
        projectLogos={<Project3Icons />}
      />
    </div>
  );
}
