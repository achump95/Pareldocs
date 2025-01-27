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

                <Container maxW='1240' bg='blue.600' color='white'>
                    sdf
                </Container>

            </Flex >


        </>
    );
}

export default Navbar;
