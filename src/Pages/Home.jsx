import { Box } from "@chakra-ui/react";
import HomeBanner from "../Components/HomeBanner";
import NavBar from "../Components/NavBar";
import SectionType1 from "../Components/sectionType1";
import FullScreenImageSlider from "../Components/FullScreenSlider";
import AmenitiesSection from "../Components/AmenitiesSection";
import ExploreBnner from "../Components/ExpoloreBanner";
import VideoGrid from "../Components/SectionVideoGrid";
import SectionEnquiry from "../Components/SectionEnquiry";
import FooterSection from "../Components/SectionFooter";
import FloatingMapButton from "../Components/FloatingMapButton";
/* import SectionOverlayBanner from "../Components/SectionOverlayBanner"; */

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
        <SectionEnquiry />
        <FooterSection />
        <FloatingMapButton />
        {/* <SectionOverlayBanner /> */}


    </Box>
}

export default Home