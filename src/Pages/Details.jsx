import React from "react";
import { Box, Container, Grid, Heading, Text, Image, Link, GridItem } from "@chakra-ui/react";
/* import { FaHelicopter } from "react-icons/fa"; // Importing a sample icon */
import arrowDown from "../assets/images/arrow-down.svg";
import helicopter from "../assets/images/helicopter-ico.svg";
import innerLeafRight from "../assets/images/inner-leaf-element.png";
import SectionFooter from "../Components/SectionFooter";


const GreenSection = () => {
    return (
        <Box>
            <Box bg="brand.600" position="relative" color="white" p='6'>
                {/* Image - Positioned on the Top */}
                <Box maxH="50vh" position="relative">
                    <Box
                        w="100%"
                        h="50vh"
                        minH="400px"
                        backgroundImage="url('https://www.malabardevelopers.com/wp-content/uploads/2024/07/MontanaG4.jpg')"
                        backgroundSize="cover"
                        backgroundPosition="center center"
                        backgroundRepeat="no-repeat"
                    />

                    {/* Icon Positioned Half Inside & Half Outside */}
                    <Box
                        position="absolute"
                        bottom={["-20px", "-40px"]}  // Moves half outside the image
                        left={["20px", "30px", "100px"]}
                        borderRadius="full"
                        zIndex="2"
                    >
                        <Image src={helicopter} w={['40px', '60px', '80px']} ></Image>
                    </Box>
                    <Box
                        position="absolute"
                        bottom={["20px", "30px", "20px"]}  // Moves half outside the image
                        right={["20px", "40px", "100px"]}
                        borderRadius="full"
                        zIndex="2"
                    >
                        <Link href="#gallerImages" >
                            <Image src={arrowDown} w='30px' h='30px'></Image>
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <Image
                        position="absolute"
                        right="0"
                        bottom="0"
                        src={innerLeafRight}
                        width={["80", "70", "70", "50", "20%"]}
                        zIndex="0"
                    >
                    </Image>


                    {/* Content Section */}
                    <Container maxW="8xl" py="130px" display="flex" alignItems="center">
                        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} alignItems="center">
                            {/* Left - Title & Subtitle */}
                            <Box>
                                <Heading as="h2" color="brand.300">
                                    HELIPAD
                                </Heading>
                                <Text as="h4" color="brand.300">
                                    LANDING AREA OF A HELIPORT
                                </Text>
                            </Box>

                            {/* Right - Paragraph */}
                            <Box>
                                <Text as="p" color="brand.300">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.
                                </Text>
                            </Box>
                        </Grid>
                    </Container>
                </Box>


            </Box>
            <Box py='130px' id="gallerImages">
                <Container maxW={'8xl'}>
                    <Grid
                        h="700px"
                        templateRows={{ base: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        gap={4}
                    >
                        {/* Grid Item 1 - Tomato with Image */}
                        <GridItem
                            rowSpan={1}
                            colSpan={1}

                            backgroundImage="url('https://www.malabardevelopers.com/wp-content/uploads/2024/07/MontanaG4.jpg')"
                            backgroundSize="cover"
                            backgroundPosition="center"

                        />

                        {/* Grid Item 2 - Papayawhip with Image */}
                        <GridItem
                            rowSpan={2}
                            colSpan={1}

                            backgroundImage="url('https://www.malabardevelopers.com/wp-content/uploads/2024/07/MontanaG4.jpg')"
                            backgroundSize="cover"
                            backgroundPosition="center"

                        />

                        {/* Grid Item 3 - Papayawhip with Image */}
                        <GridItem
                            rowSpan={1}
                            colSpan={1}

                            backgroundImage="url('https://www.malabardevelopers.com/wp-content/uploads/2024/07/MontanaG4.jpg')"
                            backgroundSize="cover"
                            backgroundPosition="center"

                        />
                    </Grid>

                </Container>
            </Box>
            <SectionFooter />
        </Box>




    );

};

export default GreenSection;
