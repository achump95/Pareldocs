import { Box } from "@chakra-ui/react";
import HomeBanner from "../Components/HomeBanner";
import NavBar from "../Components/NavBar";
import TwoPartContentSection from "../Components/contentType1";
import FullScreenImageSlider from "../Components/FullScreenSlider";

const Home = () => {
    return <Box>
        <NavBar />
        <HomeBanner />
        <TwoPartContentSection />
        <FullScreenImageSlider />
    </Box>
}

export default Home