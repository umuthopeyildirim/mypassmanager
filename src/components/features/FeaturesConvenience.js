import { Hero } from "react-daisyui";

function FeaturesStorage() {
  return (
    <Hero id="convenience" className="rounded-lg px-10 py-10">
        <Hero.Overlay className="bg-blue-50" />
      <Hero.Content className="rounded-lg px-10 py-10">
        <img
          alt="Convenience"
          src="/img/featuresConvenience.png"
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">At the tip of your fingers</h1>
          <p className="py-6">
            MyPass can record your usernames and passwords when you sign in to apps and websites. Our automatic form filler allows you to sign in to your online accounts with a single click, look, or touch.
          </p>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default FeaturesStorage;