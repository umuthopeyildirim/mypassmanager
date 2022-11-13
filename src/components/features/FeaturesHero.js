import { Hero } from "react-daisyui";

function FeaturesHero(){
    return (
        <Hero
            style={{
                backgroundImage: 'url(/img/featuresHeroBuildings.png),url(/img/featuresHeroBG.png)',
                backgroundSize: 'auto 100%,cover',
                minHeight: '680px',
                padding: '120px 0 0',
            }}
        >
            <Hero.Content className="rounded-lg px-10 py-10 text-center ">
                <div className="mb-80">
                    <h1 className="text-5xl font-bold">The MyPass you need to remember</h1>
                    <p className="py-6">
                        With MyPass you only ever need to memorize one password.<br></br>
                        All your other passwords and important information are protected by your Account Password, which only you know.
                    </p>
                </div>
            </Hero.Content>
        </Hero>

    );
}

export default FeaturesHero;