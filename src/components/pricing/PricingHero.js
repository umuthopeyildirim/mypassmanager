import { Hero } from "react-daisyui";

function PricingHero() {
  return (
    <Hero size="full" className="bg-blue-600 py-10">
      <Hero.Content className="flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold">Find the MyPass that's right for you</h1>
        <p className="text-white-600 mt-2">
          Choose from our three MyPass options to get the best value for your money.
        </p>
      </Hero.Content>
    </Hero>
  );
}

export default PricingHero;