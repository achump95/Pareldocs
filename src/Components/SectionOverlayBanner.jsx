import {
    Box, Button,
    Flex,
    Heading,
    Image,
    Stack,
    Container,
    Text,
    Grid,
    HStack,

    /* useBreakpointValue, */
} from '@chakra-ui/react';
import iconChoose from "../assets/images/icon-choose.svg";
import iconDrag from "../assets/images/icon-drag.svg";

{/* <EnterMapOverlay
    isVisible={showOverlay}
    onEnter={() => {
        setShowOverlay(false);
        // Show the explore overlay after the enter overlay closes
        setTimeout(() => setShowExploreOverlay(true), 500);
    }}
/> */}
const EnterMapOverlay = ({ isVisible, onEnter }) => {

    return (

        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="2000"
            bgGradient="linear-gradient(77deg, rgba(223,225,209,1) 33%, rgba(223,225,209,0.1741071428571429) 75%, rgba(223,225,209,0.6783088235294117) 87%);"

            /* display="flex"
            alignItems="center" */
            /* justifyContent="center" */
            transition="opacity 0.5s ease-in-out"
        >
            < Container maxW={'8xl'} >
                <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={1} align={'center'} >
                        <Stack spacing={8} w={'full'} >

                            <Heading  >
                                <br /><br />
                                <Text color={'brand.600'} as={'h2'} fontWeight={'200'}>
                                    Explore the
                                    <br></br> Development
                                </Text>
                            </Heading>
                            <Text fontSize={'24px'} color={'brand.600'}>
                                Discover the private mountain sanctuary of <br />exclusive plots, luxury villas, and exceptional amenities.
                            </Text>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                                <Button
                                    mb={'5'}
                                    size={'lg'}
                                    bg={'brand.600'}
                                    color={'white'}
                                    fontWeight={300}
                                    _hover={{
                                        bg: 'brand.500',

                                    }}>
                                    ENTER THE MAP
                                </Button>
                            </Stack>
                            <Grid
                                templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }}
                                gap={['2', '2', '6']}
                            >

                                <HStack
                                    color={'brand.600'}
                                    mb={["10px", "15px", "20px", "30px"]}
                                    align="center"
                                >
                                    <Image
                                        src={iconChoose}
                                        alt={'icon Choose'}
                                        boxSize={["10", "10"]}
                                        objectFit="contain"
                                    />
                                    <Text color={'brand.600'} as="p" ml='3' >
                                        Drag to navigate the map
                                    </Text>
                                </HStack>
                                <HStack
                                    color={'brand.600'}
                                    mb={["10px", "15px", "20px", "30px"]}
                                    align="center"
                                >
                                    <Image
                                        src={iconDrag}
                                        alt={'icon Drag'}
                                        boxSize={["10", "10"]}
                                        objectFit="contain"
                                    />
                                    <Text color={'brand.600'} as="p" ml='3' >
                                        Choose object for more info
                                    </Text>
                                </HStack>
                                <HStack></HStack>

                            </Grid>
                        </Stack>

                    </Flex>

                </Stack>

            </Container>
        </Box>
        /*  ) */
    );
};

export default EnterMapOverlay;