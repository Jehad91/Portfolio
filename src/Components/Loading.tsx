import React from 'react';
import { Box, Spinner} from 'grommet';

const Loading = () => {
  return (
    <Box
      align='center'
      justify='center'
      width='100vw'
      height='100%'
      style={
        {
          backgroundColor: 'black',
        }
      }
    >
      <Spinner color="white" size="large" />
    </Box>
  )
}

export default Loading;

