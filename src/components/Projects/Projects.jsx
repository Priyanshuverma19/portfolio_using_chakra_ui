import { Stack ,Box,Heading} from '@chakra-ui/react'
import React from 'react'
import Pcard from './Pcard'

const Projects = () => {
  return (
    <section className='cards'>
        <div >
        <Box >
        <Heading
        textAlign={'center'}
        fontFamily="body"
        color={'purple.400'}
        children="My Recent Works"
        />
      </Box>
            <Stack
            direction={["column", "row"]}
            height="100%"
            justifyContent={["center","space-between"]}
            my="8"
            >
       <Pcard/>
     
       
            </Stack>
        </div>
    </section>
  )
}

export default Projects