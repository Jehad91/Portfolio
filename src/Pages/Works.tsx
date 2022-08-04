import React from 'react';
import { Anchor, Box, Heading, Paragraph, Text } from 'grommet';
import { Github } from 'grommet-icons';
import Header from '../Components/Heading';
import Slider from "react-slick";
import WorkBox from '../Components/WorkBox';
import worksData from '../Data/works.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  };

  return (
    <>
      <Header title="Works" colour="#ffffff26" top="40px" right="20%"/>
      <Box
        margin="30px"
      >
        <Slider {...settings}>
        {worksData.map(({title, github, deploy, description, techlist}, index) => {
          return (
            <WorkBox key={index}>
              <Heading level={3}>
                {title}
              </Heading>
              <Paragraph
                size="small"
                style={{
                  borderBottom: "2px solid #000",
                  paddingBottom: "20px",
                  fontWeight: "bold",
                }}
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
        </Slider>
      </Box>
    </>
  )
}

export default Works;