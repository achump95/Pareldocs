import { Box } from "@chakra-ui/react";
import HomeBanner from "../Components/HomeBanner";
import NavBar from "../Components/NavBar";
import TwoPartContentSection from "../Components/contentType1";
import FullScreenImageSlider from "../Components/FullScreenSlider";
/* import Nav1 from "../Components/Nav1"; */

const Home = () => {
    return <Box>
        {/*  <Nav1 /> */}
        <NavBar />
        <HomeBanner />
        <TwoPartContentSection />
        <FullScreenImageSlider />
    </Box>
}

export default Home