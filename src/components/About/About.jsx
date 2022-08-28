import { Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = ({
  name,
  number,
  title,
  subtitle,
  avatar_image_path,
  location_map_link,
}) => {
  return (
    <div>
      <Grid
        m={"auto"}
        w={{
          base: "100%",
          sm: "90%",
          md: "800px",
          lg: "1000px",
          xl: "1100px",
          "2xl": "1400px",
        }}
        gridTemplateAreas={{
          sm: ` "image about"   `,
          base: ` " image " "about"`,
        }}
        gridTemplateColumns={{
          sm: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
        }}
        gridTemplateRows={{
          sm: "repeat(1, 1fr)",
          base: "repeat(2,1fr)",
        }}
        gap={{
          base: "50px",
        }}
      >
        <GridItem
        // border={"1px"}
          area={"image"}
          width={{
            base: "100%",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {" "}
          <Image
            borderRadius={"10px"}
            w={{
              sm: "650px",
              base: "100%",
            }}
            m={"auto"}
            src={`./images/${avatar_image_path}`}
          />{" "}
        </GridItem>
        <GridItem area={"about"}>
          <Heading
            fontSize={{
              sm: "30px",
              base: "26px",
            }}
            lineHeight={{
              sm: "95px",
              base: "60px",
            }}
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 500,
              color: "thistheme.text",
            }}
          >
            {title}
          </Heading>
          <Text
            w={{
              sm: "90%",
              base: "80%",
            }}
            m={"auto"}
            fontSize={{
              sm: "20px",
              base: "14px",
            }}
            lineHeight={{
              sm: "30px",
            }}
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              color: "thistheme.describe",
            }}
          >
            {subtitle}
          </Text>

          <Heading
            fontSize={{
              sm: "30px",
              base: "25px",
            }}
            lineHeight={{
              sm: "95px",
              base: "60px",
            }}
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 500,
              color: "thistheme.text",
            }}
          >
            {name}
          </Heading>

          <Text
            w={{
              sm: "90%",
              base: "80%",
            }}
            m={"auto"}
            fontSize={{
              sm: "20px",
              base: "16px",
            }}
            lineHeight={{
              sm: "30px",
              base: "46px",
            }}
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              color: "thistheme.describe",
            }}
          >
            {number}
          </Text>

          <Button
            sx={{
              target: "_blank",
            }}
            bg={"thistheme.text"}
            color={"white"}
            _hover={{
              border: "1px ",
              bg: "thistheme.background",
              borderColor: "thistheme.text",
              color: "thistheme.text",
            }}
            size={"md"}
            margin={"20px"}
          >
            <a
              target={"_blank"}
              href="https://www.google.com/maps/@28.5006897,77.3152116,12z"
            >
              Visite On google Map
            </a>
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default About;
