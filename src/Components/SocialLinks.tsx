import React from 'react';
import { Anchor, Box, BoxExtendedProps } from 'grommet';
import { Github, Linkedin} from 'grommet-icons';
import { ImWhatsapp } from 'react-icons/im';

const SocialBox = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode, display?: string; }) => (
  <Box
    as ='div'
    direction='column'
    align='center'
    justify='between'
    gap='6px'
    width='fit-content'
    style={{
      display: window.matchMedia("(max-width: 500px)").matches ? props.display : "flex",
      position: 'absolute',
      bottom: '0px',
      left: '30px',
      zIndex: "900"
    }}
    {...props}
  />
);

const SocialLinks = (props: { color?: string, display?: string }) => {
  return (
    <SocialBox display={props.display}>
      <Anchor
        href="https://wa.me/+970599734455"
        target="_blank"
      >
        <ImWhatsapp color={props.color}/>
      </Anchor>
      <Anchor
        href="https://github.com/jehad91"
        target="_blank"
      >
        <Github color={props.color} />
      </Anchor>
      <Anchor
        href="https://www.linkedin.com/in/jehad-abushaqra"
        target="_blank"
      >
        <Linkedin color={props.color} />
      </Anchor>
      <Box
        as="div"
        width="3px"
        height="100px"
        background={props.color}
      />
    </SocialBox>
  )
}

export default SocialLinks;
