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
  background,
  position,
} from "@chakra-ui/react";
import logoImage from "../assets/images/montana-logo.svg";
import hamburgerIcon from "../assets/images/hamburger-icon.svg"; // Custom Hamburger Icon
import closeIcon from "../assets/images/icons8-close-50.png"; // Custom Close Icon

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
  const navItems = {
    p: '25px',
    borderBottom: '2px',
    borderColor: 'brand.300',

  }
  const drawerIconButton = {
    justifyContent: 'end',
    zIndex: "2500",
    right: '0',
    ':hover': {
      background: 'none',
      color: 'brand.800',
      fontSize: '24px',
    },

  }
  const drawerContainer = {
    zIndex: '1000',
  }
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
        padding={
          isScrolled
            ? ["1rem 0rem", "1.5rem 2rem"] // Mobile view and larger screens
            : ["2rem 0rem", "3rem 2rem"] // Mobile view and larger screens
        }
        bg="transparent"
        backdropFilter={isScrolled ? "blur(10px)" : "blur(0px)"}
        transition="all 0.3s ease-in-out"
      >
        <Container maxW='8xl' color='white'>
          <Flex>

            {/* Logo in the Center */}

            <Flex flex="1" justify="center">
              <Image
                src={logoImage} // Replace with your logo URL
                alt="Logo"
                minW="250px"
                maxW="500px"
                width={isScrolled ? "30%" : "40%"} // Shrink logo on scroll
                objectFit="contain"
                transition="width 0.3s ease-in-out"
                align="center"
              />
            </Flex>

            {/* Custom Drawer Button on the Right */}
            <IconButton sx={drawerIconButton}


              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              icon={
                isOpen ? (
                  <Image
                    width={isScrolled ? ['30%', '50%'] : ['30%', '90%']}
                    transition="width 0.3s ease-in-out"
                    src={closeIcon} alt="Close Menu"
                  />
                ) : (
                  <Image src={hamburgerIcon}
                    alt="Open Menu"
                    maxW="100px"
                    transition="width 0.3s ease-in-out"
                    width={isScrolled ? ['50%', '50%'] : ['50%', '90%']} />
                )
              }
              variant="ghost"
              size="lg"
              onClick={isOpen ? onClose : onOpen}

            />
          </Flex>
        </Container>
      </Flex >

      {/* Drawer */}
      < Drawer sx="drawerContainer" isOpen={isOpen} placement="right" onClose={onClose} size={'md'} >
        <DrawerOverlay />
        <DrawerContent p="12" >
          {/* {<DrawerCloseButton />} */}

          <DrawerBody >
            <Box >
              <Box sx={navItems} cursor="pointer">
                ABOUT
              </Box>
              <Box sx={navItems} cursor="pointer">
                MAP VIEW
              </Box>
              <Box sx={navItems} cursor="pointer">
                FAQ
              </Box>
              <Box sx={navItems} cursor="pointer">
                CONTACT
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer >
    </>
  );
}

export default Navbar;
