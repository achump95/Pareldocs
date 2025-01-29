import React from "react";
import { Box, Text } from "@chakra-ui/react";
import bannerImage from "../assets/images/home-banner.png";


function homeBanner() {
    return (
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
            /* className="playfair-display" */
            /* textShadow="2px 2px 8px rgba(0, 0, 0, 0.7)" */
            >
                You have arrived.
            </Text>
        </Box>
    );
}

export default homeBanner;
