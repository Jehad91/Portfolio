import React from 'react';
import { Box, BoxExtendedProps } from 'grommet';
import HomeTitle from '../Components/HomeTitle';

const Container = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  <Box
    background='linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(252,246,244,1) 50%)'
    elevation='medium'
    width='100vw'
    height='100vh'
    {...props}
  />
);

const Home = () => {
  return (
    <Container>
      <HomeTitle />
    </Container>
  )
}

export default Home;
