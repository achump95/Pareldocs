import React from "react";
import { Box, Container, Grid, Heading, Text, Image, Link, GridItem, Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import SectionFooter from "../Components/SectionFooter";
import NavBar from "../Components/NavBar";
import bannerImage from "../assets/images/home-banner.png";



const Faq = () => {
    return (
        <Box >
            <NavBar />
            <Box
                height="100vh" // Full screen height
                // Full screen width
                backgroundImage={bannerImage} // Replace with your image URL
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Text
                    as='h1'
                    textAlign="center"

                >
                    FAQ
                </Text>
            </Box>

            <Box py='130px' bg='brand.200' >
                <Container maxW={'8xl'}>
                    <Accordion defaultIndex={[0]} allowToggle borderBottom='1px' borderColor='brand.500'>
                        <AccordionItem>

                            <AccordionButton borderTop='1px' borderColor='brand.500'>
                                <Box as='span' flex='1' textAlign='left' pb='30px' pt='30px'>
                                    <Heading as={'h3'} fontSize='clamp(1.875rem, 0.8777rem + 3.1915vw, 3.75rem)'>Section 1 title</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb='40px' pt='30px'>
                                <Text as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>

                            <AccordionButton borderTop='1px' borderColor='brand.500'>
                                <Box as='span' flex='1' textAlign='left' pb='30px' pt='30px'>
                                    <Heading as={'h3'} fontSize='clamp(1.875rem, 0.8777rem + 3.1915vw, 3.75rem)'>Section 2 title</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb='40px' pt='30px'>
                                <Text as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>

                            <AccordionButton borderTop='1px' borderColor='brand.500'>
                                <Box as='span' flex='1' textAlign='left' pb='30px' pt='30px'>
                                    <Heading as={'h3'} fontSize='clamp(1.875rem, 0.8777rem + 3.1915vw, 3.75rem)'>Section 3 title</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb='40px' pt='30px'>
                                <Text as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>

                            <AccordionButton borderTop='1px' borderColor='brand.500'>
                                <Box as='span' flex='1' textAlign='left' pb='30px' pt='30px'>
                                    <Heading as={'h3'} fontSize='clamp(1.875rem, 0.8777rem + 3.1915vw, 3.75rem)'>Section 4 title</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb='40px' pt='30px'>
                                <Text as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>

                            <AccordionButton borderTop='1px' borderColor='brand.500'>
                                <Box as='span' flex='1' textAlign='left' pb='30px' pt='30px'>
                                    <Heading as={'h3'} fontSize='clamp(1.875rem, 0.8777rem + 3.1915vw, 3.75rem)'>Section 5 title</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb='40px' pt='30px'>
                                <Text as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>

                            <AccordionButton borderTop='1px' borderColor='brand.500'>
                                <Box as='span' flex='1' textAlign='left' pb='30px' pt='30px'>
                                    <Heading as={'h3'} fontSize='clamp(1.875rem, 0.8777rem + 3.1915vw, 3.75rem)'>Section 6 title</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb='40px' pt='30px'>
                                <Text as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>

                            <AccordionButton borderTop='1px' borderColor='brand.500'>
                                <Box as='span' flex='1' textAlign='left' pb='30px' pt='30px'>
                                    <Heading as={'h3'} fontSize='clamp(1.875rem, 0.8777rem + 3.1915vw, 3.75rem)'>Section 7 title</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb='40px' pt='30px'>
                                <Text as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </Container>
            </Box>
            <SectionFooter />
        </Box >




    );

};

export default Faq;
