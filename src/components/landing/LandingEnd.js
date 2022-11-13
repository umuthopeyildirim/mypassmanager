import { Hero } from "react-daisyui";

function LandingEnd(){
    return(
        <Hero>
            <Hero.Overlay className="bg-opacity-60" />
            <img className="blur-sm	" src="/img/ui.png" alt="MyPass Manager UI"></img>    

            <Hero.Content className="text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Life admin. Done</h1>
                <p className="py-6">
                Automatically fill forms, payment details, and passwords. 
                Save important documents like insurance and passports for safekeeping.
                </p>
            </div>
            </Hero.Content>
        </Hero>
    );
}

export default LandingEnd;