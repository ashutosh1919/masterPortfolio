import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Heading,
  Image,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { certifications, degrees } from "../../portfolio";
import Degree from "../../components/Degree/Degree";
import Certificate from "../../components/certificates/Certificate";
import { Fade } from "react-reveal";

const Education = () => {
  return (
    <div id="Education">
      <Fade bottom duration={2000} distance={"50px"}>
      <Grid
        w={{
          base: "100%",
          sm: "90%",
          md: "800px",
          lg: "1000px",
          xl: "1100px",
          "2xl": "1400px",
        }}
        m={"auto"}
        mt={"100px"}
        gridTemplateAreas={{
          base: `  "education" "text" `,
          sm: ` "education text" "education text" `,
        }}
        gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }}
        gridTemplateRows={{ base: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }}
      >
        <GridItem area={"education"}>
          <Image
            w={{ base: "80%", sm: "100%" }}
            m={"auto"}
            src={"./images/eduation.png"}
          />
        </GridItem>

        <GridItem
          area={"text"}
          display={"flex"}
          justifyContent={"center"}
          pt={{ sm: "100px" }}
          alignitems={"center"}
        >
          <Box>
            <Text
              height={"fit-content"}
              fontSize={{ base: "30px", sm: "50px" }}
              fontWeight={{ base: 600, sm: 600 }}
              sx={{
                fontFamily: "Open Sans",
                color: "thistheme.text",
              }}
            >
              Education
            </Text>
            <Text
              fontSize={{ base: "20px", sm: "25px" }}
              fontWeight={{ base: 400, sm: 600 }}
              sx={{
                fontFamily: "Open Sans",
                color: "thistheme.text",
              }}
            >
              Basic Qualification and Certifcations
            </Text>
          </Box>
        </GridItem>
      </Grid>
      </Fade>
      <Fade bottom duration={2000} distance={"50px"}>
<Heading 
mt={{
  base : "60px"
}}
fontSize={{
  sm : "35px",
  base : "30px"
}}
lineHeight={{
  sm  : "39px",
  base : "33px"
}}
sx={{
  fontFamily : "Open Sans",
  fontWeight : 700,
  color : "thistheme.text"
}}>
Degrees Received Or Pursuing
</Heading>
</Fade>
      <Degree {...degrees.degree[0]} />

      <Spacer />
<Fade bottom distance={"50px"} duration={3000}>
      <Heading color={"thistheme.text"} mt={{ base: "100px", sm: "100px" }}>
        Certifications
      </Heading>
      <Flex
      flexWrap={"wrap"}
      gap={"20px"}
      mt={{ base: "30px", sm: "30px" }}
      w={{ base: "100%",
      sm: "90%",
      md: "800px",
      lg: "1000px",
      xl: "1100px",
      "2xl": "1400px",}}
      // border={"1px"}
      m={"auto"}
      height={"fit-content"}
      
      >
      {certifications.certifications.map((item,i) => {
        
        return <Certificate key={i} {...item} />;
      })}
    </Flex>
    </Fade>
      
    </div>
  );
};

export default Education;
