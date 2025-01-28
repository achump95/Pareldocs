import React from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import ExploreBanner from "../assets/images/expolre-banner.png";

const ExploreBnner = () => {
    return (
        <Box
            position="relative"
            bgImage={ExploreBanner} // Replace with your image URL
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            height="100vh" // Full screen height
            width="100%"
        >
            {/* Overlay for better contrast */}
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay
            ></Box>

            {/* Content */}
            <Container
                position="relative"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Button
                    size="lg"
                    color='brand.600'
                    colorScheme="brand"
                    bg="brand.300"
                    _hover={{ bg: "brand.500", color: 'brand.200' }}
                    /* fontWeight="bold" */
                    px="8"
                    py="6"
                    letterSpacing='2.4px'
                    zIndex="1" // Ensures the button is above the overlay
                >
                    EXPLORE THE DEVELOPMENT
                </Button>
            </Container>
        </Box>
    );
};

export default ExploreBnner;
