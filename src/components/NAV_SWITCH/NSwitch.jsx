// todo pending

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Flex } from "@chakra-ui/react";
import "./this.css";

const NSwitch = ({ id, name }) => {
  const [select, setselect] = useState("Home");
  const setcolor = (name) => {
    setselect(name);
  };

  return (
    <Link to={id} smooth={true} duration={1000}>
      <Flex className="switch"   fontSize={{base : "10px", sm : "15px"}}   padding={"10px"} ml={"10px"}>
        {name}
      </Flex>
    </Link>
  );
};

export default NSwitch;
