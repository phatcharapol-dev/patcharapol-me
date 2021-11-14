import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Company from "./Company/Company";
// import Slide from 'react-reveal/Fade';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3fc1c9",
      contrastText: "#ffffff",
    },
  },
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none",
        },
      },
    },
  },
});

function Timelines() {
  const companiesProp = [
    {
      name: "MFEC Public Company Limited",
      position: "Software Developer",
      period: "May 2020 - Present",
      currently: true,
      role: [
        "Build E-Comerece Website",
        "Fixed bugs from existing website and improve web functionality.",
        "Develop new user-facing features and interactive website.",
        "Integrated service java technologies to php technologies",        
      ],
    },
    {
      name: "Endoflimit Team",
      position: "Magento Developer [ Freelance ]",
      period: "May 2020 - Present",
      currently: false,
      role: [
        "Build E-Comerece Website",
        "Fixed bugs from existing website and improve web functionality.",
        "Develop new user-facing features.",
        "Build reusable code and libraries for future use.",
      ],
    },
    {
      name: "IT Element Company Limited",
      position: "Programmer",
      period: "August 2017 – April 2020",
      currently: false,
      role: [
        "Supporting fund management business such as fund selling agent and omnibus.",
        "Fixed bugs from existing website and improve web functionality.",
        "Build Core Function for use in the projects.",
        "Build Service for other systems.",
        "Migrate Data for New Site.",
        "Upgrade Platform PHP Version 5.3 to PHP Version 7.2",
      ],
    },
    {
      name: "IT Element Company Limited",
      position: "Programmer [ Intern ]",
      period: "June 2016 - August 2016",
      currently: false,
      role: [
        "Build Web Portal (Joomla).",
        "Build www.it-element.com (HTML5, CSS3, Bootstrap, JavaScript)",
        "Training PHP(Yii2),Virtual Machine,Linux",
      ],
    },
  ];

  const companies = companiesProp.map((company, index) => {
    return (
      // <Slide bottom>
        <Company
          key={index}
          name={company.name}
          position={company.position}
          period={company.period}
          role={company.role}
          currently={company.currently}
        />
      // </Slide>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Timeline align="left" className="">
        {companies}
      </Timeline>
    </ThemeProvider>
  );
}

export default Timelines;
