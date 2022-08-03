import React from 'react';
import Header from '../Components/Heading';
import IconBox from '../Components/IconBox';
import { Box, Image, Text } from 'grommet';
import {
  react, html, css, javascript, bootstrap, node, jest, npm, github,
  postgresql, redux, typescript, visulstudio, git
} from '../Assests';

const technolgies = [
  {src: react, name: "react"}, {src: html, name: "html"}, {src: css, name: "css"},
  {src: javascript, name: "javascript"}, {src: bootstrap, name: "bootstrap"},
  {src: node, name: "node"}, {src: jest, name: "jest"}, {src: npm, name: "npm"},
  {src: github, name: "github"}, {src: postgresql, name: "postgresql"},
  {src: redux, name: "redux"}, {src: typescript, name: "typescript"},
  {src: visulstudio, name: "visulstudio"}, {src: git, name: "git"}
];

const Skills = () => {

  return (
    <>
      <Header title="Skills" colour="#0000001a" bottom="38px" right="20%"/>
      <Box
        direction="row"
        align="center"
        justify="center"
        wrap= {true}
        width="80vw"
        style={
          {
            gap:"10px",
          }
        }
      >
        {technolgies.map((technolg, index) => {
          return (
            <IconBox key={index}>
                <Image width="80px" src={technolg.src} />
                <Text className="skills" color="black">{technolg.name.toUpperCase()}</Text>
            </IconBox>
          )
        })}
      </Box>
    </>
  )
}

export default Skills;