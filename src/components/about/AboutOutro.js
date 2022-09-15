import { Hero } from "react-daisyui"

function AboutWhy(){
    return (
        <Hero className="py-8 px-8">
            <Hero.Content>
            <div>
                <h1 className="text-5xl font-bold">The MyPass Manager you need to remember</h1>
                <p className="py-6">
                    With MyPass Manager, you only ever need to memorize one password. 
                    All your other passwords are protected by your Account Password, which only you know.
                </p>
            </div>
            </Hero.Content>
        </Hero>
    );
}

export default AboutWhy;