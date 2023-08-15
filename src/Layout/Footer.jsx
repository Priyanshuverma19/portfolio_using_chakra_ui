import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import{AiFillGithub} from "react-icons/ai"
import{ FaLinkedinIn,FaInstagram } from "react-icons/fa"
const Footer = () => {
  return (
    <Box padding={"4"} bg="purple.900" minH={"10vh"}>
    <Stack direction={["column","row"]}>
        <VStack alignItems={["center","flex-start"]} width={"full"}>
        <Heading
        children="Designed and Developed by Priyanshu Verma"  color={"white"} size={"sm"}
        />
        <Heading
        children="@Priyanshu Verma" size={"sm"} color={"white"}
        />
        </VStack>
       <HStack spacing={["2","10"]} justifyContent={"center"}
       color={"white"}
       fontSize={"30"}>
        
      <a href='https://github.com/Priyanshuverma19' target='_blank' rel="noreferrer">
<AiFillGithub/>
      </a>
      <a href='https://www.linkedin.com/in/priyanshu-vermaa/' target='_blank' rel="noreferrer">
<FaLinkedinIn/>
      </a>
      <a href='https://instagram.com/priyanshuverma8858?igshid=ZDc4ODBmNjlmNQ==' target='_blank'  rel="noreferrer">
<FaInstagram/>
      </a>


        
        </HStack> 

    </Stack>
    </Box>
  )
}

export default Footer