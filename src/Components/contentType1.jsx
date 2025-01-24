import React from "react";
import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react";

function TwoPartContentSection() {
    return (
        <Box w="100%" overflowX="hidden">
            <Container maxW="6xl" px={[4, 6, 8]} py="12">
                <Flex
                    direction={["column", "column", "row"]} // Stack vertically on small screens, side-by-side on larger screens
                    align="center"
                    justify="space-between"
                    gap="6"
                >
                    {/* Left Section: Heading and Subheading */}
                    <Box flex="1" textAlign={["center", "center", "left"]}>
                        <Heading as="h2" size="xl" mb="4">
                            Heading Title
                        </Heading>
                        <Text fontSize="lg" color="gray.600">
                            This is the subheading that provides additional context for the
                            section. It can be descriptive and engaging to draw attention.
                        </Text>
                    </Box>

                    {/* Right Section: Paragraph */}
                    <Box flex="1" textAlign={["center", "center", "left"]}>
                        <Text fontSize="md" color="gray.700" lineHeight="1.8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            laoreet orci non sapien tincidunt, non auctor felis tempus. Proin
                            vehicula, mauris nec facilisis vehicula, ipsum mi viverra risus,
                            ut varius velit erat ac risus. Suspendisse potenti. Curabitur
                            suscipit viverra nunc vel aliquet.
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default TwoPartContentSection;
