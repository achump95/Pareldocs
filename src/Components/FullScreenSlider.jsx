import React, { useState } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';

const images = [
    'https://www.malabardevelopers.com/wp-content/uploads/2024/07/hero-img-desk.jpg',
    'https://www.malabardevelopers.com/wp-content/uploads/2024/07/MontanaG5.jpg',
    'https://www.malabardevelopers.com/wp-content/uploads/2024/07/MontanaG8.jpg',
];

function FullScreenImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <Box
            position="relative"
            height="100vh"
            overflow="hidden" // Prevent any overflow
            margin="0"
            padding="0"
            sx={{
                // Additional styles to ensure no overflow
                "html, body": {
                    margin: 0,
                    padding: 0,
                    overflowX: "hidden",
                    width: "100%",
                },
            }}
        >
            {/* Fullscreen Image */}
            <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                objectFit="cover"
                width="100%"
                height="100%"
                display="block" // Ensures no gaps or unexpected behaviors
            />

            {/* Navigation Dots */}
            <Flex
                justifyContent="center"
                position="absolute"
                bottom="20px"
                width="100%"
                zIndex="10"
            >
                {images.map((_, index) => (
                    <Box
                        key={index}
                        cursor="pointer"
                        height="12px"
                        width="12px"
                        margin="0 5px"
                        backgroundColor={
                            currentIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)'
                        }
                        borderRadius="50%"
                        transition="background-color 0.3s"
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </Flex>
        </Box>
    );
}

export default FullScreenImageSlider;
