import { Button, Heading, Image, Stack, Text, VStack,Box } from '@chakra-ui/react'
import React from 'react'
import about from "../../assets/about.png"
import Techstack from './Techstack'


const About = () => {
  return (
    <section>
   
     <Stack
     m="20"
        direction={["column", "row"]}
       height="100%"
        justifyContent={["center","space-between"]}
         >
          <VStack width={"full"} alignItems={['center',"flex-start"]} my="20">
          <Heading
         
        textAlign={'center'}
        fontFamily="body"
        color={'purple.400'}
        children="Know Who I'M
        "
        />
           <Text
        fontSize={'2xl'}
        fontFamily="cursive"
        textAlign={['center',"left"]}
        children="Hi Everyone, I am Priyanshu Verma from Kanpur, India.
        I am a final year student pursuing in B.tech in Information Technology ."/>
        <Text
        fontSize={'2xl'}
        fontFamily="cursive"
        textAlign={['center',"left"]}
        children="I learned a lot from the open-source community and I love how collaboration and knowledge sharing happened through open-source."/>
        <Text
        fontSize={'2xl'}
        fontFamily="cursive"
        textAlign={['center', 'left']}
        children="Apart from coding, some other activities that I love to do!"
        />
<Text
        fontSize={'2xl'}
        fontFamily="cursive"
        textAlign={['center', 'left']}
     
        children="Playing Games"
        />
          </VStack>
          <Image className='main-img' boxSize={"md"} src={about} objectFit={"contain"}/>
        </Stack>
        <Box>
     <Heading
         
         textAlign={'center'}
         fontFamily="body"
         color={'purple.400'}
         children="  Professional Skillset"
         />
     </Box>
     <VStack width={"full"} my="20" overflowX={"hidden"} >
     <Techstack />

     </VStack>
    
    
    </section>
    
  )
}

export default About