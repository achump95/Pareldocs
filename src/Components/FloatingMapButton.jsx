import React from "react";
import { IconButton, Image } from "@chakra-ui/react";
import MapMark from "../assets/images/map-ico.svg";

const FloatingMapButton = () => {
    return (
        <IconButton
            aria-label="Open Map"
            icon={<Image src={MapMark} alt="Map Icon" boxSize={{ base: "8", md: "10" }} />}
            bg="brand.700"
            w={{ base: "60px", md: "100px" }}  // Set width
            h={{ base: "60px", md: "100px" }}  // Set height (same as width for a perfect circle)
            position="fixed"
            bottom={{ base: "30px", md: "80px" }}
            right={{ base: "30px", md: "80px" }}
            borderRadius="full"  // Ensures it's circular
            boxShadow="lg"
            _hover={{ bg: "brand.500" }}
        />
    );
};

export default FloatingMapButton;