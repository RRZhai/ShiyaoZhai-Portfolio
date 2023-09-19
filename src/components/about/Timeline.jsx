import React, { useState } from "react";
import ucbIcon from "../../assets/ucb.png";
import cdcIcon from "../../assets/cdc.png";
import mkaIcon from "../../assets/mka.png";
import fsIcon from "../../assets/fs.png";

const Timeline = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="timeline wrapper">
      <div className="timeline container">
        <div className="line-area"></div>

        <div
          className="timeline single-time container"
          onMouseEnter={() => setHoveredId("ucb")}
          onMouseLeave={() => setHoveredId(null)}
        >
          <span className={`${hoveredId === "ucb" ? "noshow" : "show"}`}>
            June 2019
          </span>
          <div
            className={`timeline image-area ${
              hoveredId === "ucb" ? "show" : "noshow"
            }`}
          >
            <img src={ucbIcon} alt="ucbIcon" />
            <span>Bachelor’s Degree in Architecture</span>
          </div>
        </div>

        <div
          className="timeline single-time container"
          onMouseEnter={() => setHoveredId("cdc")}
          onMouseLeave={() => setHoveredId(null)}
        >
          <span className={`${hoveredId === "cdc" ? "noshow" : "show"}`}>
            July 2019 - Nov 2019
          </span>
          <div
            className={`timeline image-area ${
              hoveredId === "cdc" ? "show" : "noshow"
            }`}
          >
            <img src={cdcIcon} alt="cdcIcon" />
            <span>Designer</span>
          </div>
        </div>

        <div
          className="timeline single-time container"
          onMouseEnter={() => setHoveredId("mka")}
          onMouseLeave={() => setHoveredId(null)}
        >
          <span className={`${hoveredId === "mka" ? "noshow" : "show"}`}>
            Nov 2019 - April 2023
          </span>
          <div
            className={`timeline image-area ${
              hoveredId === "mka" ? "show" : "noshow"
            }`}
          >
            <img src={mkaIcon} alt="mkaIcon" />
            <span>Junior Architect</span>
          </div>
        </div>

        <div
          className="timeline single-time container"
          onMouseEnter={() => setHoveredId("fs")}
          onMouseLeave={() => setHoveredId(null)}
        >
          <span className={`${hoveredId === "fs" ? "noshow" : "show"}`}>
            April 2023 - July 2023
          </span>
          <div
            className={`timeline image-area ${
              hoveredId === "fs" ? "show" : "noshow"
            }`}
          >
            <img src={fsIcon} alt="fsIcon" />
            <span>Full Stack Web Development</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
