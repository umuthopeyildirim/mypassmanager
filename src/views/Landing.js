import CoreBar from "../components/CoreBar";
import LandingHero from "../components/landing/LandingHero";
import LandingStats from "../components/landing/LandingStats";
import LandingFeatures from "../components/landing/LandingFeatures";
import LandingEnd from "../components/landing/LandingEnd";
import CoreFooter from "../components/CoreFooter";

function Landing(){
    return (
        <>
            <CoreBar />
            <LandingHero />
            <LandingStats />
            <LandingFeatures />
            <LandingEnd />
            <CoreFooter />
        </>
    );
}

export default Landing;