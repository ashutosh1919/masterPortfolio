import React from "react";
import { Button, Grid, SimpleGrid, Spacer } from "@chakra-ui/react";
import { socialMediaLinks } from "../../portfolio";
import { seo } from "../../portfolio";
import Social from "./social/Social";
import "./this.css";
const Socials = () => {
  return (
    <div style={{
      display : "flex",
      flexDirection : "column",
      justifyContent : "space-evenly",
      alignItems : "center",
    }}>
     
      <SimpleGrid
        minChildWidth="41px"
        w={{ base: "80%" }}
        m={"auto"}
        mt={"20px"}
        spacing="15px"
        display={"flex"}
        flexWrap={"wrap"}
        alignContent={"center"}
        mb={"20px"}
        justifyContent={"center"}
>
        {socialMediaLinks.map((item, i) => {
          return <a  key={i} href={item.link} target={"_blank"}> <Social  {...item} /></a>
        })}
      </SimpleGrid>
      
    </div>
  );
};

export default Socials;
