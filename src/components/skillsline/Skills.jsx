import { Text } from '@chakra-ui/react'
import React from 'react'

const Skills = ({Skills}) => {
  return (
    <Text textAlign={"left"} w={{base : "90%", sm : "100%"}}
    fontSize={{base : "15px", sm : "20px"}}
    sx={{
        fontFamily : 'Open Sans',
        color : "thistheme.describe",
        fontWeight :400
    }}>{Skills}</Text >
  )
}

export default Skills