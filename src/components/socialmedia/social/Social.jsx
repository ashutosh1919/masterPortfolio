import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
const Social = ({ name, link, fontAwesomeIcon, backgroundColor }) => {
  //   console.log(backgroundColor);

  return (
    <Box
    
      w={"41px"}
      h={"41px"}
      backgroundColor={backgroundColor}
   
      borderRadius={"50%"}
      m={"auto"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image width={"80%"} src={`/images/${fontAwesomeIcon}`} />
    </Box>
  );
};

export default Social;
