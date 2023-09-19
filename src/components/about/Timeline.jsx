import React from "react";
import ucbIcon from "../../assets/ucb.png";
import cdcIcon from "../../assets/cdc.png";
import mkaIcon from "../../assets/mka.png";

const Timeline = () => {
  return (
    <div className="timeline wrapper">
      <div className="timeline container">
        <div className="line-area"></div>
        <div className="timeline single-time active">
          <span>June 2019</span>
          <div className="timeline image-area">
            <a href="#">
              <img src={ucbIcon} alt="ucbIcon" />
              <span>University of California - Berkeley</span>
            </a>
          </div>
        </div>
        <div className="timeline single-time active">
          <span>July 2019 - November 2019</span>
          <div className="timeline image-area">
            <a href="#">
              <img src={cdcIcon} alt="cdcIcon" />
              <span>Community Design Center</span>
            </a>
          </div>
        </div>
        <div className="timeline single-time active">
          <span> November 2019 - April 2023</span>
          <div className="timeline image-area">
            <a href="#">
              <img src={mkaIcon} alt="mkaIcon" />
              <span>Matano Kang Architects</span>
            </a>
          </div>
        </div>
        <div className="timeline single-time active">
          <span>April 2023 - July 2023</span>
          <div className="timeline image-area">
            <a href="#">
              <img src="" alt="" />
              <span>Flatiron School</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
