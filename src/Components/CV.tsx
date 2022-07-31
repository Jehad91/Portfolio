import React from 'react';
import { Anchor, Heading } from 'grommet';
import { DocumentDownload } from 'grommet-icons';

const CV = (props: { color?: string}) => {
  return (
    <Anchor
      href="https://docdro.id/HVkhZg2"
      target="_blank"
      color={props.color}
      style={{
        position: "absolute",
        top: "30px",
        right: "30px",
        textAlign: "center",
        zIndex: "900"
      }}
    >
      <DocumentDownload color={props.color} size="large" />
      <Heading level={5} color={props.color} style={{fontWeight: "800"}}>CV</Heading>
    </Anchor>
  )
}

export default CV;
