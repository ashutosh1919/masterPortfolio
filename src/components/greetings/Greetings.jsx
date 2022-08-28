import { flexbox } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import Greet from "../Greet/Greet";
const Greetings = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "end",
        padding : "auto"
      }}
    >
      <Fade bottom duration={1000} distance={"20px"}>
        <Greet {...greeting} />
      </Fade>
    </div>
  );
};

export default Greetings;
