import React from 'react';
import { Heading, Box, BoxExtendedProps } from 'grommet';
import SocialLinks from '../Components/SocialLinks';

const About = () => {

  // const AboutBox = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  //   <Box
  //     width='60vw'
  //     pad='30px'
  //     border={
  //       {
  //         color: "#fcf6f4",
  //         size: "medium",
  //         style: "solid",
  //         side: "all"
  //       }    
  //     }
  //     {...props}
  //   />
  // );
  // const Paragraph = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  //   <Paragraph
  //   color= "#fcf6f4"
  //   fill= {true}      
  //     {...props}
  //   />
  // );
  return (
    <h1>about</h1>
    // <>
    //   <Heading style={{
    //     fontSize: '70px',
    //     fontWeight: '900',
    //     padding: '30px',
    //     color: '#d5d5d51c',
    //     position: 'absolute',
    //     top: '43px',
    //     left: '70px'
    //   }}>
    //     ABOUT
    //   </Heading>
    //   <AboutBox>
    //     <Paragraph fill={true}>
    //     I'm a front-end developer located in India. 
    //     I love to create simple yet beautiful websites with great user experience.
    //     </Paragraph>
    //     <Paragraph fill={true}>
    //     I'm interested in the whole frontend stack Like trying new things and building great projects. 
    //     I'm an independent freelancer and blogger. I love to write blogs and read books.
    //     </Paragraph>
    //     <Paragraph fill={true}>
    //     I believe everything is an Art when you put your consciousness in it. 
    //     You can connect with me via social links.
    //     </Paragraph>
    //   </AboutBox>
    //   <SocialLinks />
    // </>
  )
}

export default About;