import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {      
      main: '#34D399',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none"
        }
      }
    }
  }
});

const Theme = createMuiTheme({
    overrides: {
      MuiTimelineItem: {
        missingOppositeContent: {
          "&:before": {
            display: "none"
          }
        }
      }
    }
  });

function Experince() {
    return (
        <div className="md:p-20 px-6 py-16 md:text-base text-sm text-gray-300 bg-black md:h-screen h-full font-mono flex md:flex-row flex-col justify-center items-center">
            <div className="md:pl-40 w-full justify-center text-white md:text-left mb-2 font-bold">                                   
                    <p className="md:block hidden py-2 text-5xl">Experince</p>
                    <p className="md:block hidden py-2 text-4xl">More than 4 years</p>
                    <p className="md:block hidden py-2 text-4xl">experience as a</p>
                    <p className="md:block hidden py-2 text-5xl text-green-400">Developer</p>

                    <p className="md:hidden block py-1 text-2xl">Experince</p>
                    <p className="md:hidden block py-1 text-xl">More than 4 years experience as a <span className="text-2xl text-green-400">Developer</span></p>                    
            </div>                  
            <div className="w-full">
                <ThemeProvider theme={theme}>
                    <Timeline align="left" className="text-left">
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot className="md:h-6 md:w-6 w-5 h-5" color="primary"/>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="text-left">
                                    <p className="text-green-400 md:text-xl">MFEC Public Company Limited</p>
                                    <p>Software Developer</p>
                                    <p>May 2020 - Present</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot className="md:h-5 md:w-5 h-4 w-4" variant="outlined" color="primary"/>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="text-left">
                                    <p className="text-green-400 md:text-xl">Endoflimit Team</p>
                                    <p>Magento Developer [ Freelance ]</p>
                                    <p>May 2020 - Present</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot className="md:h-5 md:w-5 h-4 w-4" variant="outlined" color="primary" />
                            <TimelineConnector color="primary"/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="text-left">
                                    <p className="text-green-400 md:text-xl">IT Element Company Limited</p>
                                    <p>Software Developer</p>
                                    <p>August 2017 – April 2020</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot className="md:h-5 md:w-5 h-4 w-4" variant="outlined" color="primary" />
                            <TimelineConnector color="primary" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="text-left">
                                    <p className="text-green-400 md:text-xl">IT Element Company Limited</p>
                                    <p>Software Developer [ Intern ]</p>
                                    <p>June 2016 - August 2016</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>                        
                    </Timeline>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Experince
