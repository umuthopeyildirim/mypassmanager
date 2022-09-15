import CoreBar from "../components/CoreBar";
import PricingHero from "../components/pricing/PricingHero";
import PricingList from "../components/pricing/PricingList";
import PricingReviews from "../components/pricing/PricingReviews";
import CoreFooter from "../components/CoreFooter";

function Pricing(){
    return (
        <div>
            <CoreBar />
            <PricingHero />
            <PricingList />
            <PricingReviews />
            <CoreFooter />
        </div>
    );
}

export default Pricing;