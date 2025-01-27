import React from "react";
import { Box, Flex, Heading, Text, Container, Image } from "@chakra-ui/react";
import leafPngLeft from "../assets/images/leafpngleft.png";
import leafPngright from "../assets/images/leaf-png-right.png"; // Custom Hamburger Icon

function TwoPartContentSection() {
    return (
        <Box w="100%" overflowX="hidden" position="relative" bg={'brand.200'}>
            <Image
                position="absolute"
                src={leafPngLeft}
                width="30%"
                zIndex='0'
            >

            </Image>
            <Container maxW="6xl" px={[4, 6, 8]} py="40">
                <Flex
                    direction={["column", "column", "row"]} // Stack vertically on small screens, side-by-side on larger screens
                    align="center"
                    justify="space-between"
                    gap="6"
                >
                    {/* Left Section: Heading and Subheading */}
                    <Box flex="1" textAlign={["center", "center", "left"]}>
                        <Heading as="h4" size='md' >Welcome</Heading>
                        <Heading as="h2" font='80px' mb="4" fontWeight={'400'}>
                            Where nature meets luxury
                        </Heading>

                    </Box>

                    {/* Right Section: Paragraph */}
                    <Box flex="1" textAlign={["center", "center", "left"]}>
                        <Text fontSize="md" color="gray.700" lineHeight="1.8">
                            Montana Estates is a visionary address redefining sustainable luxury living in India. Inspired by the grandeur of the mountains, it offers a harmonious retreat amidst lush greenery. Conveniently located near Calicut city, Montana Estates brings together the peace of mountain living with the convenience of urban life.
                        </Text>
                    </Box>
                </Flex>
            </Container>
            <Image
                position="absolute"
                right="0"
                bottom="0"
                src={leafPngright}
                width="30%"
                zIndex="0"
            >
            </Image>
        </Box>
    );
}

export default TwoPartContentSection;
