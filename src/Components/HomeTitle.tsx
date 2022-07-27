import React from 'react';
import { Heading, Image ,Box, BoxExtendedProps } from 'grommet';
import userPhoto from '../Assests/userphoto.png';

const HomeBox = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  <Box
    direction='row'
    align='center'
    justify='between'
    width='55vw'
    height='45vh'
    margin='auto'
    {...props}
  />
);
const SubBox = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  <Box
    basis="1/2"
    width="100%"
    height="100%"
    pad="20px"
    border={
      {
        color: props.color,
        size: 'medium',
        style: "solid",
        side: "all"
      }
    } 
    {...props}
  />
);

const HomeTitle = () => {
  return (
      <HomeBox>
        <SubBox
          gap="20px"
          color="#fcf6f4"
          style={{
            borderRight: "none"
          }}
        >
          <Heading level="1" margin="none" color="#fcf6f4">
            Hi,
          </Heading>
          <Heading level="2" margin="none" color="#fcf6f4">
            I'm Jehad Abushaqra
          </Heading>
          <Heading level="4" margin="none" color="#fcf6f499">
            Full-Stack Web Developer
          </Heading>
        </SubBox>
        <SubBox
          color="#000"
          style={{
            borderLeft: "none",
            position: "relative"
          }}
        >
          <Image
            fill="horizontal"
            alignSelf="center"
            fit="contain"
            src={userPhoto}
            style={{
              position: "absolute",
              top: "-85px",
              height: "60vh"
            }}
          />
        </SubBox>
      </HomeBox>
  )
}

export default HomeTitle;
