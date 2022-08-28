import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { project, projectsHeader, seo } from "../../portfolio";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import Project from "../../components/Project/Project";
import { Fade } from "react-reveal";
const Projects = () => {
  return (
    <div id="Projects">
      <Fade bottom distance={"60px"} duration={3000}>
      <ProjectIntro {...projectsHeader} />
      </Fade>
      <Spacer />
      <Flex  w={{
        base: "100%",
        sm: "90%",
        md: "800px",
        lg: "1000px",
        xl: "1100px",
        "2xl": "1400px",
      }} 
     justifyContent={"center"}
      m={"auto"} flexWrap={"wrap"}  gap={"20px"}  h={"fit-content"} cursor={"pointer"} mt={{ base: "50px", sm: "80px" }}>
        {project.data.map((item,i) => {
          return <Project key={i} {...item} />;
        })}
      </Flex>
      <br/>
      <br/>
      <Button onClick={()=>window.location.href=seo.og.url} color={"white"} bg={"thistheme.text"}>
        More Projects
      </Button>
    </div>
  );
};

export default Projects;
