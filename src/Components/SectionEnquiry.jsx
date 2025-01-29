import React from "react";
import {
    Box,

    Container,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Input,
    Textarea,
    Button, Image,
} from "@chakra-ui/react";
import GreenleafPngLeft from "../assets/images/greenleaf.png";
import GreenleafPngright from "../assets/images/greenleafright.png"; // Custom Hamburger Icon

const HomeEnquiryForm = () => {
    return (
        <Box as="section" bg="brand.600" overflow="hidden" position={"relative"}>
            <Image
                position="absolute"
                src={GreenleafPngLeft}
                /* width={["80", "70", "70", "50", "30%"]} */
                zIndex='0'
                bottom="0"
            ></Image>
            <Image
                position="absolute"
                right="0"
                top="0"
                src={GreenleafPngright}
                /* width={["80", "70", "70", "50", "20%"]} */
                zIndex="0"
            ></Image>
            <Container maxW="8xl" py="130px">
                <Accordion allowToggle >
                    <AccordionItem borderColor="transparent">
                        <AccordionButton >
                            <Box
                                flex="1"
                                textAlign="center"
                                fontSize={["lg", "xl"]}
                                color="brand.300"
                            >
                                ORGANIZE AN APPOINTMENT OR MAKE AN INQUIRY
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        {/* Accordion Panel (Contact Form) */}
                        <AccordionPanel pb={4}>
                            <Box
                                p={6}

                                mx="auto"
                            >
                                {/* Contact Form */}
                                <form>
                                    <Box mt={8} mb={""} display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                                        {/* First Name */}
                                        <Box>
                                            <Input
                                                color={"brand.100"}
                                                placeholder="First Name"
                                                size="lg"
                                                variant="flushed" // Flushed variant for bottom-line style
                                                focusBorderColor="brand.200"
                                                _placeholder={{ color: "brand.300" }}
                                                letterSpacing={"1.2px"}
                                                borderColor="brand.700"
                                            />
                                        </Box>

                                        {/* Last Name */}
                                        <Box>
                                            <Input
                                                color={"brand.100"}
                                                placeholder="Second Name"
                                                size="lg"
                                                variant="flushed"
                                                focusBorderColor="brand.200"
                                                _placeholder={{ color: "brand.300" }}
                                                letterSpacing={"1.2px"}
                                                borderColor="brand.700"
                                            />
                                        </Box>

                                        {/* Email */}
                                        <Box>
                                            <Input
                                                color={"brand.100"}
                                                placeholder="Enter your email"
                                                size="lg"
                                                variant="flushed"
                                                focusBorderColor="brand.200"
                                                type="email"
                                                borderColor="brand.700"
                                                _placeholder={{ color: "brand.300" }}
                                                letterSpacing={"1.2px"}
                                            />
                                        </Box>

                                        {/* Mobile Number */}
                                        <Box>
                                            <Input
                                                color={"brand.100"}
                                                placeholder="Enter your mobile number"
                                                size="lg"
                                                variant="flushed"
                                                focusBorderColor="brand.200"
                                                type="tel"
                                                borderColor="brand.700"
                                                _placeholder={{ color: "brand.300" }}
                                                letterSpacing={"1.2px"}
                                            />
                                        </Box>
                                    </Box>

                                    {/* Message Textarea (Full Row) */}
                                    <Box mb={12} mt={6}>
                                        <Textarea
                                            color={"brand.100"}
                                            placeholder="Enter your message here"
                                            size="lg"
                                            variant="flushed"
                                            focusBorderColor="brand.200"
                                            rows={5}
                                            borderColor="brand.700"
                                            _placeholder={{ color: "brand.300" }}
                                            letterSpacing={"1.2px"}
                                        />
                                    </Box>

                                    <Box align="center">
                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            bg="brand.600"
                                            size="lg"
                                            borderColor="brand.700"
                                            color={"brand.300"}
                                            letterSpacing="1.4px"
                                            border="1px"
                                            _hover={{ bg: "brand.500", color: "brand.200" }}
                                        >
                                            SEND ENQUIRY
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>

        </Box>
    );
};

export default HomeEnquiryForm;
