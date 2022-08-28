import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Socials from "../socialmedia/Socials";

const ContactIntro = ({ title, profile_image_path, description }) => {
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
              sm: "250px",
              base: "200px",
            }}
            src={`./images/${profile_image_path}`}
          />{" "}
        </GridItem>
        <GridItem area={"about"}>
          <Heading
            fontSize={{
              sm: "50px",
              base: "30px",
            }}
            lineHeight={{
              sm: "95px",
              base: "65px",
            }}
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              color: "thistheme.text",
            }}
          >
            {title}
          </Heading>
          <Text
            w={{
              sm: "90%",
              base: "80",
            }}
            m={"auto"}
            fontSize={{
              sm: "20px",
              base: "16px",
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
            {description}
          </Text>

          <Socials />
          <Spacer />
          <Button
          sx={{
            target : "_blank"
          }}
            bg={"thistheme.text"}
            color={"white"}
            _hover={{
              border: "1px ",
              bg: "thistheme.background",
              borderColor: "thistheme.text",
              color: "thistheme.text",
            }}
            size ={"md"}
          >
            <a target={"_blank"} href="https://drive.google.com/file/d/1qXnUfDG8s7TwCpwOMTFgH2Wi7fJzyB7l/view">
            See my resume
            </a>
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ContactIntro;
