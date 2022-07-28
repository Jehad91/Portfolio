import React from 'react';
import { Paragraph } from 'grommet';

const ParagraphStyle = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <Paragraph 
      fill={true}
      color="#fcf6f4"
      margin="8px"
    >
      {props.children}
    </Paragraph>
  )
}

export default ParagraphStyle;
