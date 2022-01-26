// Main packages
import React from "react";

export default function Project({
  project,
  projectName,
  projectDescription,
  projectLogos,
}) {
  return (
    <div>
      <div>
        <h5>{project}</h5>
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
        <div>{projectLogos}</div>
        <div>
          <button>Preview</button>
          <button>Code</button>
        </div>
      </div>
    </div>
  );
}
