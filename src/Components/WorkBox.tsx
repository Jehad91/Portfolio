import React from 'react';
import { Box, BoxExtendedProps, ResponsiveContext } from 'grommet';

const BoxWorkStyle = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  <Box
    responsive
    className='box-icon'
    align='center'
    justify='around'
    width='20rem'
    height='50vh'
    background='#fcf6f4'
    pad='10px 20px'
    style={{
      margin: '0 50px',
      borderRadius: '0px 40px',
      boxShadow: 'rgb(0 0 0 / 70%) 2px 2px 5px 2px',
      transition: "all 0.5s ease-in-out",
    }}
    {...props}
  />
);

const WorkBox = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <ResponsiveContext.Consumer>
      {size  => (
        <BoxWorkStyle>{props.children}</BoxWorkStyle>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default WorkBox;
