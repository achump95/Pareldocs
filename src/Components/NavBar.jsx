import React, { useState, useEffect } from "react";
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
  Container,
} from "@chakra-ui/react";
import logoImage from "../assets/images/montana-logo.svg";
import hamburgerIcon from "../assets/images/hamburger-icon.svg"; // Custom Hamburger Icon
import closeIcon from "../assets/images/close-icon.svg"; // Custom Close Icon

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}

      <Flex
        as="nav"
        position="fixed"
        top="0"
        width="100%"
        zIndex="1000"
        align="center"
        justify="space-between"
        padding={isScrolled ? "1.5rem 2rem" : "3rem 2rem"}
        bg="transparent"
        backdropFilter={isScrolled ? "blur(10px)" : "blur(0px)"}
        transition="all 0.3s ease-in-out"
      >
        <Container maxW='1340' color='white'>
          <Flex>

            {/* Logo in the Center */}

            <Flex flex="1" justify="center">
              <Image
                src={logoImage} // Replace with your logo URL
                alt="Logo"
                minW="150px"
                maxW="500px"
                width={isScrolled ? "30%" : "40%"} // Shrink logo on scroll
                objectFit="contain"
                transition="width 0.3s ease-in-out"
                align="center"
              />
            </Flex>

            {/* Custom Drawer Button on the Right */}
            <IconButton
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              icon={
                isOpen ? (
                  <Image
                    width={isScrolled ? "50%" : "90%"}
                    transition="width 0.3s ease-in-out"
                    src={closeIcon} alt="Close Menu" />
                ) : (
                  <Image src={hamburgerIcon}
                    alt="Open Menu"
                    maxW="100px"
                    transition="width 0.3s ease-in-out"
                    width={isScrolled ? "50%" : "90%"} />
                )
              }
              variant="ghost"
              size="lg"
              onClick={isOpen ? onClose : onOpen}

              right="1rem"
            />
          </Flex>
        </Container>
      </Flex >

      {/* Drawer */}
      < Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
        <DrawerOverlay />
        <DrawerContent p="12">
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
      </Drawer >
    </>
  );
}

export default Navbar;
