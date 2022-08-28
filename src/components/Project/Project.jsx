import {
  AlertDescription,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";

const Project = ({
  id,
  name,
  createdAt,
  url,
  description,
  link,
  languages,
}) => {
  return (
    <VStack 
      bg={"#a6e1fa "}
      w={"450px"}
      align={"left"}
      p={"10px"}
      pl={{base : "20px", sm: "auto"}}
      pr={{base : "20px", sm: "auto"}}
      textAlign={"left"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
    >
        <Fade bottom distance={"30px"} duration={3000}>
      <Heading
        onClick={() => (window.location.href = url)}
        target={"_blank"}
        fontSize={{
          base: "16px",
          sm: "25px",
        }}
        alignSelf={"left"}
        lineHeight={{
          base: "19px",
          sm: "30px",
        }}
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 700,
          color: "thistheme.text",
        }}
      >
        {name}
      </Heading>
      <br />
      {description.map((item,i) => {
        return (
          <Text key={i}
            onClick={() => (window.location.href = link)}
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              color: "thistheme.text",
            }}
            fontSize={{ base: "13px", sm: "13px" }}
          >
            {" "}
            {item}{" "}
          </Text>
        );
      })}
      <br />
      <Flex 
      
      flexDir={{base : "column", sm : "row"}}
      >
        <Text
          sx={{
            fontFamily: "Open Sans",
            fontWeight: 400,
            color: "#7f8daa",
          }}
          fontSize={{ base: "14px", sm: "16px" }}
        >
          {" "}
          Created on {createdAt}
        </Text>
        <Spacer />
        <Flex  gap={"15px"} flexWrap={"wrap"} w={{base : "90%", sm :"50%"}}>
{
    languages.map((item,i)=>{
        return <Image key={i} src={`./images/${item.iconifyClass}`} w={"55px"} />
    })
}


        </Flex>
      </Flex>
      </Fade>
    </VStack>
  );
};

export default Project;
