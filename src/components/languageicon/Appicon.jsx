import { Image } from "@chakra-ui/react";
import React from "react";

const Appicon = ({ skillName, fontAwesomeClassname, style }) => {
//   console.log(style);
  return (
    <div >
      <Image
        width={{
          base : "35px",
          sm : "70px"
        }}
        margin={"5px"}
        mb={{
          base : "20px",
          sm  : "5px"
        }}
        src={`./images/${fontAwesomeClassname}`}
      />
    </div>
  );
};

export default Appicon;
