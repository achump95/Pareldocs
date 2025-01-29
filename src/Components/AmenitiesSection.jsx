import React from "react";
import { Box, Grid, HStack, Text, Container, Image } from "@chakra-ui/react";

// Sample image URLs for the amenities icons
import helicopter from "../assets/images/helicopter-ico.svg";
import amphitheatre from "../assets/images/amphitheatre.svg";
import yogaIcon from "../assets/images/yoga.svg";
import wellness from "../assets/images/wellness.svg";
import sports from "../assets/images/sports.svg";
import forest from "../assets/images/forest.svg";
import gym from "../assets/images/gym.svg";
import chargingStation from "../assets/images/charging-station.svg";
import pool from "../assets/images/pool.svg";
import security from "../assets/images/security.svg";
import restaurant from "../assets/images/restaurant.svg";

const AmenitiesSection = () => {
    // Sample data for amenities with image icons
    const amenities = [
        { icon: helicopter, label: "Helipad" },
        { icon: amphitheatre, label: "Amphitheatre" },
        { icon: yogaIcon, label: "Yoga Deck" },
        { icon: wellness, label: "Wellness Garden" },
        { icon: sports, label: "Sports Centre" },
        { icon: forest, label: "Miyazaki Forest" },
        { icon: gym, label: "Gym" },
        { icon: chargingStation, label: "Charging Station" },
        { icon: pool, label: "Infinity Pool" },
        { icon: security, label: "24 x 7 Security" },
        { icon: restaurant, label: "Tropical Restaurant*" },
    ];

    return (
        <Box as="section" py="150" bg={'brand.600'}>
            <Container maxW="8xl">
                {/* Heading */}
                <Box mb={["18px", "50px"]}>
                    <Text as="h4" color='brand.300'>
                        AMENITIES
                    </Text>

                </Box>

                {/* Amenities Grid */}
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(4, 1fr)" }}
                    gap={['2', '2', '6']}
                >
                    {amenities.map((amenity, index) => (
                        <HStack
                            key={index}
                            /* bg="white" */
                            mb={["10px", "15px", "20px", "30px"]}
                            /* borderRadius="md" */
                            /*  boxShadow="sm" */
                            /* _hover={{ boxShadow: "md", transform: "scale(1.02)" }}
                            transition="all 0.2s" */
                            align="center"
                        >
                            {/* Icon (Image) */}
                            <Image
                                src={amenity.icon}
                                alt={amenity.label}
                                boxSize={["14", "16", "20"]}
                                objectFit="contain"
                            />
                            {/* Label */}
                            <Text as="p" ml='3' color="brand.300">
                                {amenity.label}
                            </Text>
                        </HStack>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AmenitiesSection;
