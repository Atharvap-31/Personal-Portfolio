import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@mui/icons-material";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2014"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Vimlatai Tidke Convent School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maharashtra, Nagpur
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            temporibus.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2016"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Santaji Mahavidyalya College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maharashtra, Nagpur
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore
            vero et! Ipsum nemo facere voluptatibus ab, blanditiis odit
            voluptate.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            City Premier College, Maharashtra, Nagpur
          </h3>
          <p>
            Graduation In B.COM Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Exercitationem, deleniti?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            RTMNU University, Maharashtra, Nagpur
          </h3>

          <h4 className="vertical-timeline-element-subtitle">PG Degree</h4>

          <p>
            MBA in Human Resource Management Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Sequi eveniet itaque, dolorem
            architecto suscipit ratione.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
