import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import NSwitch from "../NAV_SWITCH/NSwitch";
import { Fade } from "react-reveal";
const Navbar = () => {
  let Nav = [
    { name: "Home", id: "Home" },
    { name: "Education", id: "Education" },
    { name: "Projects", id: "Projects" },
    { name: "Contact Me", id: "Contact Me" },
  ];

  return (
    
      <Flex
 
        m={"auto"}
        mt={"20px"}
        w={{
          base: "90%",
          sm: "90%",
          md: "800px",
          lg: "900px",
          xl: "1100px",
          "2xl": "1400px",
        }}
        borderColor="black"
      >
          <Link to="Home">
        <Flex color="thistheme.text"  w={"100%"}  >
          <Box fontSize={{base : "15px", sm : "25px"}} className="entity">&lt;</Box>
          <Box fontSize={{base : "18px", sm : "34px"}} className="mercy">Mercy /</Box>
          <Box fontSize={{base : "15px", sm : "25px"}} className="entity">&gt;</Box>
        </Flex>
          </Link>
        <Spacer />
        <Flex alignItems={"center"}  w={"80%"}>
          <Spacer />
          {Nav.map((item) => {
            return <NSwitch key={item.id} name={item.name} id={item.id} />;
          })}
        </Flex>
      </Flex>
 
  );
};

export default Navbar;
