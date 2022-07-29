import React from 'react';
import { Anchor, Box, Heading, Paragraph, Text } from 'grommet';
import { Github } from 'grommet-icons';
import Header from '../Components/Heading';
import WorkBox from '../Components/WorkBox';
import worksData from '../Data/works.json';

const Works = () => {
  return (
    <>
      <Header title="Works" colour="#0000001a" top="40px" right="20%"/>
      <Box
        margin="30px"
        direction="row"
        align="center"
        justify="center"
        style={
          {
            display: "-webkit-inline-box"
            // gap:"10px",
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
          }
        }
      >
        {worksData.map(({title, github, deploy, description, techlist}, index) => {
          return (
            <WorkBox key={index}>
              <Heading level={4}>
                {title}
              </Heading>
              <Paragraph
                size="small"
                style={{borderBottom: "2px solid #000", paddingBottom: "20px"}}
              >
                {description}
              </Paragraph>
              <Box
                direction="row"
                wrap={true}
                gap="4px"
              >
                {techlist.map((tech, index) => <Text size='small' key={index}>#{tech}</Text>)}
              </Box>
              <Box
                direction="row"
                justify="around"
                align="center"
                width="100%"
              >
                <Anchor
                  href={deploy}
                  target="_blank"
                  weight="notmrl"
                  color="white"
                  style={{
                    backgroundColor: "black",
                    padding: "10px",
                    width: "9rem",
                    textAlign: "center",
                    borderEndStartRadius: "40px",
                    fontSize: "18px",
                  }}
                >
                  Deploy
                </Anchor>
                <Anchor
                  href={github}
                  target="_blank"
                  icon={<Github color='black' size='large'/>}
                />
              </Box>
            </WorkBox>
          )
        })}
      </Box>
    </>
  )
}

export default Works;