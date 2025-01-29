import React, { useState, useEffect } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';

const images = [
    'https://www.malabardevelopers.com/wp-content/uploads/2024/07/hero-img-desk.jpg',
    'https://www.malabardevelopers.com/wp-content/uploads/2024/07/MontanaG5.jpg',
    'https://www.malabardevelopers.com/wp-content/uploads/2024/07/MontanaG6.jpg',
];

function FullScreenImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to a specific slide
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 5000); // Change slide every 5 seconds

        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            position="relative"
            height="85vh"
            overflow="hidden"
            margin="0"
            padding="0"
            sx={{
                "html, body": {
                    margin: 0,
                    padding: 0,
                    overflowX: 'hidden',
                    width: '100%',
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
                display="block"
            />

            {/* Navigation Dots */}
            <Flex
                justifyContent="center"
                position="absolute"
                bottom="50px"
                width="100%"
                zIndex="10"
            >
                {images.map((_, index) => (
                    <Box
                        key={index}
                        cursor="pointer"
                        height="20px"
                        width="20px"
                        margin="0 8px"
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
