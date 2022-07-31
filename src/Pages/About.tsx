import React from 'react';
import { Box, BoxExtendedProps, Image } from 'grommet';
import Header from '../Components/Heading';
import spaceman from '../Assests/spaceman.png';
import ParagraphStyle from '../Components/Paragraph';

const About = () => {

  const AboutBox = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
    <Box
      width='50vw'
      pad='12px'
      border={
        {
          color: "#fcf6f4",
          size: "medium",
          style: "solid",
          side: "all"
        }    
      }
      style={
        {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "100px",
          borderRadius: "7px",
        }
      }
      {...props}
    />
  );

  return (
    <>
      <Header title="About" colour="#d5d5d51c" top="43px" left="150px" />
      <AboutBox>
        <ParagraphStyle>
          I'm a Full-Stack Web developer located in Palestine.
          I'm a hardworking and passionate jobseeker with strong organizational skills eager to secure an entry-level full-stack developer position.
        </ParagraphStyle>
        <ParagraphStyle>
          I'm ready to help the team achieve company goals.
          I'm well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages.
        </ParagraphStyle>
        <ParagraphStyle>
          Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease.<br/>
          Collaborative team player with excellent technical abilities, offering 1 year of related experience.
        </ParagraphStyle>
      </AboutBox>
      <Image src={spaceman}
            fill={false}
            alignSelf="center"
            fit="contain"
            style={{
              position: "absolute",
              right: "100px",
              top: "50%",
              transform: "translateY(-50%)",
              animation: "upDown 1s linear infinite alternate",
            }}
      />
    </>
  )
}

export default About;