import React from "react";
import { Box, Flex, Link, List, ListItem, Image, Container } from "@chakra-ui/react";
import footerLogo from "../assets/images/malabar-logo.svg"; // Replace with your logo path
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Footer = () => {

    const footerLinkItems = {
        color: 'brand.600',
        fontSize: '20px',
        ':hover': {
            color: 'brand.800',
            textDecoration: 'none',
        },
    }
    return (
        <Box as="footer" bg="brand.200" color="white" py="130px">
            <Container maxW="8xl" >
                <Flex
                    justify="space-between"
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 8, md: 0 }}
                >
                    {/* Left Side: Quick Links */}
                    <Flex flex="1" gap={10}>
                        {/* Column 1 */}
                        <Box>

                            <List spacing={3}>
                                <ListItem>
                                    <Link href="#about" sx={footerLinkItems}>
                                        Contact
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#services" sx={footerLinkItems}>
                                        FAQs
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#careers" sx={footerLinkItems}>
                                        Sitemap
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#contact" sx={footerLinkItems}>
                                        Privacy Policy
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>

                        {/* Column 2 */}
                        <Box>

                            <List spacing={3}>
                                <ListItem>
                                    <Link href="#faq" sx={footerLinkItems}>
                                        Instagram
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#privacy" sx={footerLinkItems}>
                                        Facebook
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#terms" sx={footerLinkItems}>
                                        YouTube
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="#blog" sx={footerLinkItems}>
                                        Blog
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                    </Flex>

                    {/* Right Side: Logo and Description */}
                    <Flex
                        flex="1"
                        direction="column"
                        my='auto'
                        align={{ base: "center", md: "flex-end" }}
                        textAlign={{ base: "center", md: "right" }}
                    >
                        <Image src={footerLogo} alt="Logo" mb={4} width="150px" />
                        <Link fontSize="20px" color="brand.600" _hover={{ color: "brand.800" }}>
                            {/*  © {new Date().getFullYear()} Your Company. All Rights Reserved. */}
                            About Malabar Developers
                            <ExternalLinkIcon style={{ fontSize: "15px", marginLeft: "5px" }} />
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;
