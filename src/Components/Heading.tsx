import React from 'react';
import { Heading } from 'grommet';

const Header = (props: { title: String}) => {
  return (
    <Heading style={{
      fontSize: '100px',
      fontWeight: '900',
      margin: '0',
      padding: '30px',
      color: '#d5d5d51c',
      position: 'absolute',
      top: '43px',
      left: '70px'
    }}>
      {props.title.toUpperCase()}
    </Heading>
  )
}

export default Header;
