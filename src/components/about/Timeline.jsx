import React from "react";
import ucbIcon from "../../assets/ucb.png";
import cdcIcon from "../../assets/cdc.png";
import mkaIcon from "../../assets/mka.png";
import fsIcon from "../../assets/fs.png";
const Timeline = () => {
  return (
    <div className="timeline wrapper">
      <div className="timeline container">
        <div className="line-area"></div>
        <div className="timeline single-time active">
          <span>June 2019</span>
          <div className="timeline image-area">
            <img src={ucbIcon} alt="ucbIcon" />
            <span>University of California - Berkeley</span>
          </div>
        </div>
        <div className="timeline single-time active">
          <span>July 2019 - Nov 2019</span>
          <div className="timeline image-area">
            <img src={cdcIcon} alt="cdcIcon" />
            <span>Community Design Center</span>
          </div>
        </div>
        <div className="timeline single-time active">
          <span> Nov 2019 - April 2023</span>
          <div className="timeline image-area">
            <img src={mkaIcon} alt="mkaIcon" />
            <span>Matano Kang Architects</span>
          </div>
        </div>
        <div className="timeline single-time active">
          <span>April 2023 - July 2023</span>
          <div className="timeline image-area">
            <img src={fsIcon} alt="fsIcon" />
            <span>Flatiron School</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
