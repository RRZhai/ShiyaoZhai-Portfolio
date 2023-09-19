import React, { useState } from "react";
import ucbIcon from "../../assets/ucb.png";
import cdcIcon from "../../assets/cdc.png";
import mkaIcon from "../../assets/mka.png";
import fsIcon from "../../assets/fs.png";
const Timeline = () => {
  const [showlogo, setShowlogo] = useState(false);
  return (
    <div className="timeline wrapper">
      <div className="timeline container">
        <div className="line-area"></div>
        <div
          className="timeline single-time"
          onMouseEnter={() => setShowlogo(true)}
          onMouseLeave={() => setShowlogo(false)}
        >
          <span className={`${showlogo ? "noshow" : "show"}`}>June 2019</span>
          <div
            className={`timeline image-area ${showlogo ? "show" : "noshow"}`}
          >
            <img src={ucbIcon} alt="ucbIcon" />
            <span>Bachelor’s Degree in Architecture</span>
          </div>
        </div>
        <div
          className="timeline single-time"
          onMouseEnter={() => setShowlogo(true)}
          onMouseLeave={() => setShowlogo(false)}
        >
          <span className={`${showlogo ? "noshow" : "show"}`}>
            July 2019 - Nov 2019
          </span>
          <div
            className={`timeline image-area ${showlogo ? "show" : "noshow"}`}
          >
            <img src={cdcIcon} alt="cdcIcon" />
            <span>Designer</span>
          </div>
        </div>
        <div
          className="timeline single-time"
          onMouseEnter={() => setShowlogo(true)}
          onMouseLeave={() => setShowlogo(false)}
        >
          <span className={`${showlogo ? "noshow" : "show"}`}>
            Nov 2019 - April 2023
          </span>
          <div
            className={`timeline image-area ${showlogo ? "show" : "noshow"}`}
          >
            <img src={mkaIcon} alt="mkaIcon" />
            <span>Junior Architect</span>
          </div>
        </div>
        <div
          className="timeline single-time"
          onMouseEnter={() => setShowlogo(true)}
          onMouseLeave={() => setShowlogo(false)}
        >
          <span className={`${showlogo ? "noshow" : "show"}`}>
            April 2023 - July 2023
          </span>
          <div
            className={`timeline image-area ${showlogo ? "show" : "noshow"}`}
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
