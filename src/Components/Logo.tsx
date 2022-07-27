import React from 'react';
import { Anchor, Image } from 'grommet';
import logo from '../Assests/logo.png';

const Logo = () => {
  return (
    <Anchor
      href="/"
      
      style={{
        position: "absolute",
        top: "30px",
        left: "30px"
      }}
    >
      <Image
            fill="horizontal"
            alignSelf="center"
            fit="cover"
            src={logo}
            style={{
              width: "70px"
            }}
          />
    </Anchor>
  )
}

export default Logo;
