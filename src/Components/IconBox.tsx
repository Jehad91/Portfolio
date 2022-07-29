import React from 'react';
import { Box, BoxExtendedProps } from 'grommet';

const BoxIconStyle = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  <Box
    className='box-icon'
    align='center'
    justify='around'
    width='120px'
    height='150px'
    background='#fff5f5'
    pad='10px'
    style={{
      flex: '19%',
      boxShadow: 'rgb(0 0 0 / 70%) 2px 2px 5px 2px',
      transition: "all 0.5s ease-in-out",
    }}
    {...props}
  />
);

const IconBox = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <BoxIconStyle>{props.children}</BoxIconStyle>
  )
}

export default IconBox;
