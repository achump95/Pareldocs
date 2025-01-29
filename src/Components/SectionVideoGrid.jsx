import React, { useState } from "react";
import {
    Box,
    Grid,
    Text,
    Container,
    IconButton,
    Modal,
    Image,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import videoCoverOne from "../assets/images/couples.png";
import videoCoverTwo from "../assets/images/fruits.png";
/* import videoCoverThree from "../assets/images/lady.png"; */
import VideoPlayIcon from "../assets/images/video-play-button.svg"; // Replace this with your custom play icon if needed.

const VideoGrid = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            poster: videoCoverOne,
            title: "HEADING ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            poster: videoCoverTwo,
            title: "HEADING ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            poster: videoCoverOne,
            title: "HEADING ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];

    const handlePlay = (videoSrc) => {
        setSelectedVideo(videoSrc);
        onOpen();
    };

    return (
        <>
            {/* Video Grid Section */}
            <Box as="section" py="200" bg="brand.200">
                <Container maxW="8xl">
                    <Text as="h4" mb="20" letterSpacing="1.3px">
                        LIFE IN MONTANA
                    </Text>
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap={10}
                    >
                        {videos.map((video, index) => (
                            <Box key={index} overflow="hidden" position="relative">
                                {/* Video Thumbnail with Placeholder and Play Icon */}
                                <Box
                                    position="relative"
                                    pb="75%" // 4:3 aspect ratio
                                    height={['300', '400', '500']}
                                    bg="gray.100"
                                    overflow="hidden"
                                    borderRadius="md"
                                    _hover={{ cursor: "pointer", bg: "gray.200" }}
                                    onClick={() => handlePlay(video.src)}
                                >
                                    {/* Placeholder Image */}
                                    <img
                                        src={video.poster}
                                        alt={`Thumbnail for ${video.title}`}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                    {/* Play Icon */}
                                    <IconButton
                                        aria-label="Play Video"
                                        icon={<Image src={VideoPlayIcon} alt="Map Icon" boxSize={{ base: "8", md: "10" }} />}
                                        bg="transparent"
                                        borderRadius="full"
                                        size="lg"
                                        position="absolute"
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                    />
                                </Box>

                                {/* Heading and Description */}
                                <Box color="brand.600" mt={["10", "14", "16"]}>
                                    <Text as="h4" size="md" mb="6" letterSpacing="1.3px">
                                        {video.title}
                                    </Text>
                                    <Text as="p" mb="6" >
                                        {video.description}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Lightbox Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent bg="black" p="0">
                    <ModalCloseButton color="white" />
                    <ModalBody p="0">
                        {selectedVideo && (
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "md",
                                }}
                            />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default VideoGrid;
