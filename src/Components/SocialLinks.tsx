import React from 'react';
import { Anchor, Box, BoxExtendedProps } from 'grommet';
import { Github, Linkedin} from 'grommet-icons';

const SocialBox = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  <Box
    as ='div'
    direction='column'
    align='center'
    justify='between'
    gap='4px'
    width='fit-content'
    style={{
      position: 'absolute',
      bottom: '0px',
      left: '30px'
    }}
    {...props}
  />
);

const SocialLinks = () => {
  return (
    <SocialBox>
      <Anchor
        href="https://github.com/jehad91"
        target="_blank"
      >
        <Github color="#fcf6f4" />
      </Anchor>
      <Anchor
        href="https://www.linkedin.com/in/jehad-abushaqra"
        target="_blank"
      >
        <Linkedin color="#fcf6f4" />
      </Anchor>
      <Box
        as="div"
        width="3px"
        height="100px"
        background="#fcf6f4"
      />
    </SocialBox>
  )
}

export default SocialLinks;
