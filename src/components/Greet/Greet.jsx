import { HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Greet = ({
  title,
  nickname,
  subTitle,
  resumelink,
  portfolio_repository,
  githubProfile,
}) => {
  return (
    <VStack 
    // border={"1px"}
      height="fit-content"
     
      textAlign={{ sm: "left", md: "left" }}
    >
      
      <Text
        fontSize={{ base: "30px", sm: "50px" }}
        lineHeight={{ base: "33px", sm: "55px" }}
        w={{ base: "70%", sm: "80%" }}
        m={"auto"}
        mt={{base : "50px"}}
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,

          color: "thistheme.text",
        }}
      >
        {" "}
        {title}
      </Text>

      <Text
        pt={{ base: "0px", sm: "15px" }}
        w={{ base: "fit-content", sm: "80%" }}
        m={"auto"}
        fontSize={{
          base : "18px",
          sm : "24px",
        }}
        lineHeight={{
          base : "10px",
          sm : "20px"
        }}
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          
          color: "thistheme.text",
        }}
      >
        {" "}
        <i>&#40;{nickname} &#41;</i>
      </Text>

      <Text
      // border={"1px"}
      w={{ base: "fit-content", sm: "80%" }}
      m={"auto"}
        pt={{ sm: "20px", base: "20px" }}
        fontSize={{ sm: "20px", base: "16px" }}
        lineHeight={{ sm: "35px", base: "23px" }}
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 500,
          color: "thistheme.describe",
          width: "80%",
          
        }}
        mt={{
          base : "120px"
        }}
      >
        {" "}
        {subTitle}
      </Text>
    </VStack>
  );
};

export default Greet;
