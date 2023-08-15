import React from 'react'
import {ColorModeSwitcher} from "../ColorModeSwitcher"
import {RiMenu5Line} from "react-icons/ri"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const LinkButton =({url="/",title="Home",onClose})=>(
    <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
</Link>
)
const Header = () => {
    const {isOpen,onOpen,onClose}= useDisclosure()
  return (<>
    <ColorModeSwitcher/>
    <Button onClick={onOpen} colorScheme={"purple"} width="12" height={'12' }rounded="full" position={"fixed"} top="6" left={"6"}>
 <RiMenu5Line/>
    </Button>
    <Drawer placement='left'onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton/>
            <DrawerHeader borderBottom={'1px'}>Priyanshu.</DrawerHeader> 
            <DrawerBody>
              <VStack>
              <LinkButton onClose={onClose} url="/" title="Home"/>
              <LinkButton onClose={onClose} url="/about" title="About"/>
              <LinkButton onClose={onClose} url="/projects" title="Projects"/>
              <LinkButton onClose={onClose} url="/contact" title="Contact"/>
                </VStack>  
            </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>


    </Drawer>
    </>
  )
}

export default Header