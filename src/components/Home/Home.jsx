import React from 'react'
import "./home.css"
import { Heading, Stack,Box, VStack,Text,Button, Image, HStack } from '@chakra-ui/react'

import bg from "../../assets/bg.png"
import avatar from "../../assets/avatar.png"
import Type from './Type'
const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <Stack
        direction={["column", "row"]}
        height="100%"
        justifyContent={["center","space-between"]}
        alignItems="center"
        
        >
          <VStack width={"full"} alignItems={['center',"flex-start"]} mx="20">
            <HStack>
           <Text
            fontSize={'3xl'}
            fontFamily="cursive"
            textAlign={['center', 'left']}
            children="Hi There!"
            
            />
            <Text
            fontSize={'3xl'}
            fontFamily="cursive"
            textAlign={['center', 'left']}
            children=" 👋🏻"
            className="wave" 
            />
            </HStack>
           <Heading children=" I'M PRIYANSHU VERMA" size={'2xl'}/>
           <Text
        fontSize={'2xl'}
        fontFamily="cursive"
        textAlign={['center', 'left']}
        children={<Type/>}/>
        
          </VStack>
          <Image className='main-img' boxSize={"md"} src={bg} objectFit={"contain"}/>
        </Stack>
      </div>
      <Box>
        <Heading
        textAlign={'center'}
        fontFamily="body"
        color={'purple.400'}
        children="LET ME INTRODUCE MYSELF"
        />
      </Box>
      
        <Stack
        mx="16"
        direction={["column", "row"]}
        height="100%"
        justifyContent={["center","space-between"]}
        alignItems="center">
         <VStack width={"full"} alignItems={['center','flex-start']} mx="20">
         
          <Text
           fontSize={'2xl'}
           fontFamily="cursive"
           textAlign={[ 'left']}
            children="I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️"/>
          <Text
           fontSize={'2xl'}
           fontFamily="cursive"
           textAlign={[ 'left']}
            children="I am fluent in classics like C++ and Javascript."/>
            <Text
           fontSize={'2xl'}
           fontFamily="cursive"
           textAlign={['left']}
            children="My field of Interest's are building new  Web Technologies and Products."/>
            <Text
           fontSize={'2xl'}
           fontFamily="cursive"
           textAlign={[ 'left']}
            children="I developing products with Node.js and Modern Javascript Library and Frameworks  like React.js. "/>
            
         </VStack>
         <Image boxSize={"md"} src={avatar} objectFit={"contain"}/>
        </Stack>
        
  
    </section>
  )
}

export default Home