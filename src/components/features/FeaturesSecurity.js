import { Hero } from "react-daisyui";

function FeaturesSecurity() {
  return (
    <Hero id="security">
      <Hero.Overlay className="bg-cyan-900" />
      <Hero.Content className="rounded-lg px-10 py-10 text-center text-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Only you have access to your MyPass data.</h1>
          <p className="py-6">
            Your MyPass data is end-to-end encrypted to keep it safe at rest and in transit. 
            Our security recipe starts with AES 256-bit encryption, 
            and we use multiple techniques to make sure only you have access to your information.
          </p>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default FeaturesSecurity;