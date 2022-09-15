import { Hero, Button } from "react-daisyui";

function AboutEnd() {
  return (
    <div className="py-8 px-8 text-center">
        <Hero className="py-8 px-8" style={{backgroundImage:'url(/img/try-it.svg)',}}>
        <Hero.Content>
            <div>
            <h1 className="text-5xl font-bold">Try MyPass Manager</h1>
            <p className="py-6">
                Try MyPass Manager free for 14 days, and take the first step towards better online security.
            </p>
            <Button href="pricing" color="accent">Get Started</Button>
            </div>
        </Hero.Content>
        </Hero>
    </div>
  );
}

export default AboutEnd;
