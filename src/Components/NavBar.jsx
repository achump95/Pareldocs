import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import logoImage from "../assets/images/montana-logo.svg";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Navbar */}
      <Flex
        as="nav"
        position="fixed"
        top="0"
        width="100%"
        bg="transparent"
        zIndex="1000"
        align="center"
        justify="space-between"
        padding="1rem 2rem"
        backdropFilter="blur(10px)" // Optional for glassmorphism effect
      >
        {/* Logo in the Center */}
        <Flex flex="1" justify="center">
          <Image
            src={logoImage} // Replace with your logo URL
            alt="Logo"
            height="50px" // Adjust the height as needed
            objectFit="contain"
          />
        </Flex>

        {/* Drawer Button on the Right */}
        <IconButton
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          size="lg"
          onClick={isOpen ? onClose : onOpen}
          position="absolute"
          right="1rem"
        />
      </Flex>

      {/* Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box>
              <Box mb="4" cursor="pointer">
                Home
              </Box>
              <Box mb="4" cursor="pointer">
                About
              </Box>
              <Box mb="4" cursor="pointer">
                Services
              </Box>
              <Box mb="4" cursor="pointer">
                Contact
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
