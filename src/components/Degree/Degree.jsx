import { Box, Button, Grid, GridItem, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";

const Degree = ({
  title,
  subtitle,
  logo_path,
  alt_name,
  duration,
  descriptions,
  website_link,
}) => {
  // console.log(title)
  return (
    <>
      <Grid
        w={{
          base: "100%",
          sm: "90%",
          md: "800px",
          lg: "900px",
          xl: "1100px",
          "2xl": "1400px",
        }}
        mt={{ base: "60px", sm: "100px" }}
        gridTemplateAreas={{
          base: ` "logo" "card"`,
          sm: `"logo card" "logo card"`,
        }}
        gridTemplateColumns={{ base: ` repeat(1, 1fr) `, sm: "repeat(2, 1fr)" }}
        gridTemplateRows={{ base: "repeat(2,1fr)", sm: "repeat(1,1fr)" }}
        // border={"1px"}
        m={"auto"}
        p={"20px"}
        gap={{ base: "40px", sm: "0px" }}
      >
        <GridItem p={"auto"}>
          <div>
            <Fade left duration={2000} distance={"50px"}>
            <Image
              m={{ base: "auto", sm: 0 }}
              src={`./images/${logo_path}`}
              boxShadow={
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
              }
              bg={"#f8c313"}
              borderRadius={"100%"}
              width={{ base: "35%", sm: "150px" }}
            />
            </Fade>
          </div>
        </GridItem>
        <Fade right duration={2000} distance={"50px"}>
        <GridItem height={{sm: "200px"}}
           w={{ sm: "650px", base: "100%" }}>
          <VStack
          borderRadius={"5px"}
          
          overflow={"hidden"}
            // border={"1px"}
            w={"100%"}
            boxShadow={"rgba(0, 0, 0, 0.55) 0px  0px 15px"}
            h={"100%"}
          >
            <Grid 
           w={"100%"}
            p={"10px"}
            gridTemplateColumns={{
              base : 'repeat(1,1fr)',
              sm :'repeat(3,1fr)'
            }}
            gridTemplateRows={{
              base : 'repeat(3,1fr)',
              sm :'repeat(2,1fr)'
            }}
            gridTemplateAreas={{
              base :  ` "title " "subtitle" "duration"  `,
              sm : `  "title title duration" "subtitle subtitle subtitle"`
            }}
            bg={"#84b7d5"}
            >
              <GridItem  area={"title"}>
                <Text
                  fontSize={{ base: "18px", sm: "22px" }}
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    color: "thistheme.text",
                  }}
                  textAlign={"left"}
                >
                  {" "}
                  {title}
                </Text>
              </GridItem>
              <GridItem area={"subtitle"}>
                <Text
                  fontSize={{ base: "16px", sm: "18px" }}
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    color: "thistheme.text",
                  }}
                  textAlign={"left"}
                >
                  {" "}
                  {subtitle}
                </Text>
              </GridItem>
              <GridItem  area={"duration"}>
                <Text
                  fontSize={{ base: "20px", sm: "16px" }}
                  textAlign={"right"}
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    color: "thistheme.text",
                  }}
                >
                  {" "}
                  {duration}
                </Text>
              </GridItem>
            </Grid>

            
              {descriptions.map((item,i) => {
                 return <Text key={i}  w={"100%"} textAlign={"left"}>
                  {item}

                </Text>
              })}
            <Spacer />
            <Button onClick={()=>window.location.href=website_link}  alignSelf={"right"} bg={"#84b7d5"}  size='md'>
              Visit Website
            </Button>
            <Spacer/>
          </VStack>
        </GridItem>
        </Fade>
      </Grid>
    </>
  );
};

export default Degree;

{
  /* <Text
fontSize={{ base: "20px", sm: "23px" }}
sx={{
  fontFamily: "Open Sans",
  fontWeight: 700,
  color: "thistheme.text",
}}
>
{" "}
{title}
</Text>{" "}
<Text
fontSize={{ base: "20px", sm: "16px" }}
sx={{
  fontFamily: "Open Sans",
  fontWeight: 700,
  color: "thistheme.text",
}}
> {duration}</Text>{" "}
<Text>
1
</Text> */
}
