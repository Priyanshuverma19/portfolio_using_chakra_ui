import { Card, CardBody, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
   DiGit,
  
} from "react-icons/di";

const Techstack = () => {
  return (
    <Stack direction={["column", "row"]}
    height="100%"
    fontSize={"100"}
    spacing={"5"}
    
     justifyContent={["center","space-between"]}
     
     >
 <Card bg="purple.400" >
  <CardBody>
    <Text><CgCPlusPlus/></Text>
  </CardBody>
</Card>
<Card bg="purple.400">
  <CardBody>
    <Text><DiJavascript1/></Text>
  </CardBody>
</Card>

<Card bg="purple.400">
  <CardBody>
    <Text><DiReact/></Text>
  </CardBody>
</Card>

<Card bg="purple.400">
  <CardBody>
    <Text><DiNodejs/></Text>
  </CardBody>
</Card>

<Card>
  <CardBody bg="purple.400">
    <Text><DiMongodb/></Text>
  </CardBody>
</Card>

<Card bg="purple.400">
  <CardBody>
    <Text><DiGit/></Text>
  </CardBody>
</Card>




    </Stack>
  )
}

export default Techstack