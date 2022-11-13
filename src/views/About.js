import CoreBar from "../components/CoreBar";
import AboutHero from "../components/about/AboutHero";
import AboutWhy from "../components/about/AboutWhy";
import AboutOutro from "../components/about/AboutOutro";
import AboutEnd from "../components/about/AboutEnd";
import CoreFooter from "../components/CoreFooter";

function About(){
    return (
        <div>
            <CoreBar />
            <AboutHero />
            <AboutWhy />
            <AboutOutro />
            <AboutEnd />
            <CoreFooter />
        </div>
    );
}

export default About;