import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Chatapp from "../../assets/Chatapp.png"
import portfolio from "../../assets/portfolio.png"
import Dashbord from "../../assets/Dashbord.png"
import todolist from "../../assets/todolist.png"

const Pcard = () => {
  return (<>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={portfolio}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Portfolio</Heading>
      <Text>
   I Created personal portfolio website, a showcase of my skills and projects, developed using cutting-edge technologies such as React.js, React-Bootstrap, and React Router Dom. my expertise in various technologies and programming languages. With its responsive design and smooth navigation
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='5'>
    <a href='https://64afe02453165c0e1e09d0ad--beautiful-banoffee-938171.netlify.app/' target='_blank'>
      <Button variant='solid' colorScheme='purple'>
        View demo
      </Button>
      </a>
      <a href='https://github.com/Priyanshuverma19/portfolio' target='_blank'>
      <Button variant='solid' colorScheme='purple' >
        Code
      </Button>
      </a>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={Dashbord}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Dashbord</Heading>
      <Text>
      Crypto Dashboard, a powerful tool built using React and React-ApexCharts to provide real-time insights into the cryptocurrency market. 
      Utilizing React's dynamic capabilities and React-ApexCharts for visually appealing charts, users can monitor cryptocurrency prices. 
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='5'>
    <a href='https://64aa73116ffd100a7aee1daf--thunderous-faloodeh-d87d85.netlify.app/' target='_blank'>
      <Button variant='solid' colorScheme='purple'>
        View demo
      </Button>
      </a>
      <a href='https://github.com/Priyanshuverma19/Crypto-dashbord-using-react' target='_blank'>
      <Button variant='solid' colorScheme='purple' >
        Code
      </Button>
      </a>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={Chatapp}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Chat App</Heading>
      <Text>
      I Create Real-Time Chat App, a seamless communication platform built with React to keep you connected with friends and loved ones in real-time. With this app, you can send instant messages
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='5'>
    <a href='https://jovial-kheer-abbe23.netlify.app/' target='_blank'>
      <Button variant='solid' colorScheme='purple'>
        View demo
      </Button>
      </a>
      <a href='https://github.com/Priyanshuverma19/chatbackend' target='_blank'>
      <Button variant='solid' colorScheme='purple' >
        Code
      </Button>
      </a>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={todolist}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>To Do List</Heading>
      <Text>
      Todo List App, a powerful productivity tool built with React to help you organize tasks and manage your daily activities efficiently. 

      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='5'>
      <a href='https://64aac7e67ed34f34b02eae4a--rad-rabanadas-a4e270.netlify.app/' target='_blank'>
      <Button variant='solid' colorScheme='purple'>
        View demo
      </Button>
      </a>
      <a href='https://github.com/Priyanshuverma19/todolist' target='_blank'>
      <Button variant='solid' colorScheme='purple' >
        Code
      </Button>
      </a>
    </ButtonGroup>
  </CardFooter>
</Card>
</>
  )
}

export default Pcard