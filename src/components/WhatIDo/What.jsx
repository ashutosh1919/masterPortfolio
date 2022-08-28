import { Flex, Grid, GridItem, Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-reveal'
import Appicon from '../languageicon/Appicon'
import Skills from '../skillsline/Skills'

const What = ({img,title,filename, skills, softwareSkills}) => {
    
  return (
   <Grid 
pt={{
  base : "30px",
  sm : "20px"
}}
   w={{ base: "100%",
   sm: "90%",
   md: "800px",
   lg: "1000px",
   xl: "1100px",
   "2xl": "1400px",}}
   gridTemplateColumns={{base : 'repeat(1,1fr)', sm: 'repeat(2,1fr)'}}
   gridTemplateRows={{base : 'repeat(2,1fr)',  sm: 'repeat(2,1fr)'}}
   gridTemplateAreas={{
    base : `  "info" "image"`,
    sm : ` "image info" "image info"   `
   }}   
   >
    <GridItem area={"image"} >
      <Fade left duration={1500}>
        <Image src={`./images/${img}`} />
        </Fade>
    </GridItem>
    <GridItem area={"info"} >
<Fade right duration={1000}>
      <Heading
      w={{base : "%", sm : "90%"}} 
      m={"auto"}
      fontSize={{base : "30px", sm : "40px"}}
      sx={{
        fontFamily : 'open sans',
        fontWeight : 500,       
        color : "thistheme.text"
        
      }}>
        {title}
      </Heading>
      </Fade>
      <Fade right duration={1500}>
    <Flex flexWrap={'wrap'} mt={"20px"} align={"center"} justifyContent={"center"} >
      {
        softwareSkills.map((item,i)=>{
          return <Appicon  key={i} {...item} />
        })
      }
    </Flex>
    </Fade>
    <Fade right duration={2000}>
    <VStack>
      {
        skills.map((item,i)=>{
          return <Skills key={i} Skills={item} />
        })
      }
    </VStack>
    </Fade>
    </GridItem>
   </Grid>
  )
}

export default What