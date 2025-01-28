import { Box } from "@chakra-ui/react";
import HomeBanner from "../Components/HomeBanner";
import NavBar from "../Components/NavBar";
import SectionType1 from "../Components/sectionType1";
import FullScreenImageSlider from "../Components/FullScreenSlider";
import AmenitiesSection from "../Components/AmenitiesSection";
import ExploreBnner from "../Components/ExpoloreBanner";
import VideoGrid from "../Components/SectionVideoGrid";

/* import Nav1 from "../Components/Nav1"; */

const Home = () => {
    return <Box>
        {/*  <Nav1 /> */}
        <NavBar />
        <HomeBanner />
        <SectionType1 />
        <FullScreenImageSlider />
        <AmenitiesSection />
        <ExploreBnner />
        <VideoGrid />
    </Box>
}

export default Home