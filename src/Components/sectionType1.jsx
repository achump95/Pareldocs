import React from "react";
import { Box, Flex, Text, Container, Image } from "@chakra-ui/react";
import leafPngLeft from "../assets/images/leafpngleft.png";
import leafPngright from "../assets/images/leaf-png-right.png"; // Custom Hamburger Icon

function TwoPartContentSection() {
    return (
        <Box w="100%" overflowX="hidden" position="relative" bg={'brand.200'}>
            <Image
                position="absolute"
                src={leafPngLeft}
                width={["80", "70", "70", "50", "30%"]}
                zIndex='0'
            >

            </Image>
            <Container maxW="8xl" py="60">
                <Flex
                    direction={["column", "column", "row"]} // Stack vertically on small screens, side-by-side on larger screens
                    align="center"
                    justify="space-between"
                    gap="6"
                >
                    {/* Left Section: Heading and Subheading */}
                    <Box flex="1" textAlign={["center", "center", "left"]}>
                        <Text as="h4"  >WELCOME</Text>
                        <Text as="h2"  >
                            Where nature  meets luxury
                        </Text>

                    </Box>

                    {/* Right Section: Paragraph */}
                    <Box flex="1" textAlign={["left", "left", "left"]}>
                        <Text >
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
                width={["80", "70", "70", "50", "20%"]}
                zIndex="0"
            >
            </Image>
        </Box>
    );
}

export default TwoPartContentSection;
