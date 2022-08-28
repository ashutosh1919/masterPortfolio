import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Certificate = ({
  title,
  subtitle,
  logo_path,
  certificate_link,
  alt_name,
  color_code,
}) => {
  return (
    <Flex
      flexWrap={"wrap"}
      // gap={"20px"}
      mt={{ base: "30px", sm: "30px" }}
      w={{ base: "100%", sm: "290px" }}
      height={"290px"}
      // border={"1px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      m={"auto"}
      flexDir={"row"}
    >
      <Box bg={"white"} height={"68%"} w={"100%"}> 
        <Image w={"100%"} h={"100%"} src={`./images/${logo_path}`} />
      </Box>
      <Flex h={"32%"} alignItems={"center"} justifyContent={"center"} w={"100%"}>
        {" "}
        <Text 
        fontSize={{sm :"20px"}} 
        w={"90%"}
        sx={{
          fontFamily : "Open Sans",
          fontWeight : 700,
          
          color: "thistheme.text"
        }} >{title}</Text>{" "}
      </Flex>
    </Flex>
  );
};

export default Certificate;
