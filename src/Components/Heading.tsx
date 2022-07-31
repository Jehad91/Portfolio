import React from 'react';
import { Heading } from 'grommet';

interface HeaderProps{
  title: string;
  colour: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}
const Header = (props: HeaderProps) => {
  return (
    <Heading style={{
      fontSize: '100px',
      fontWeight: '900',
      margin: '0',
      color: props.colour,
      position: 'absolute',
      top: props.top,
      left: props.left,
      right: props.right,
      bottom: props.bottom,
      zIndex: '0'
    }}>
      {props.title.toUpperCase()}
    </Heading>
  )
}

export default Header;
