import CoreBar from "../components/CoreBar";
import FeaturesHero from "../components/features/FeaturesHero";
import FeaturesSecurity from "../components/features/FeaturesSecurity";
import FeaturesSecuritySec from "../components/features/FeaturesSecuritySec";
import FeaturesStorage from "../components/features/FeaturesStorage";
import FeaturesConvenience from "../components/features/FeaturesConvenience";
import CoreFooter from "../components/CoreFooter";

function Features(){
    return (
        <div>
            <CoreBar />
            <FeaturesHero />
            <FeaturesSecurity />
            <FeaturesSecuritySec />
            <FeaturesStorage />
            <FeaturesConvenience />
            <CoreFooter />
        </div>
    );
}

export default Features;