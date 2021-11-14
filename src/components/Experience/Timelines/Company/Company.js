import React from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

function Company(props) {
  const listRole = props.role.map((element, index) => (
    <li key={index}>{element}</li>
  ));
  const variant = props.currently ? "default" : "outlined";

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          className="md:h-6 md:w-6 w-5 h-5"
          variant={variant}
          color="primary"
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="mb-6">
        <div className="company-box">
          <h4>{props.name}</h4>
          <p className="text-lg font-bold">{props.position}</p>
          <h5>{props.period}</h5>
          <ul className="list-disc mt-2 ml-8 list-outside">{listRole}</ul>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default Company;
