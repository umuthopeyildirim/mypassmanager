import { Hero } from "react-daisyui";

function FeaturesStorage() {
  return (
    <Hero id="storage" className="rounded-lg px-10 py-10">
        <Hero.Overlay className="bg-blue-50" />
      <Hero.Content className="rounded-lg px-10 py-10">
        <div>
          <h1 className="text-5xl font-bold">Locked up tight.</h1>
          <p className="py-6">
            Your logins and private documents are securely stored in your password vault. 
            This keeps your information locked away from thieves, hackers, and other unsavory types.
          </p>
        </div>
        <img
          alt="Storage"
          src="/img/featuresStorage.png"
          className="max-w-sm rounded-lg"
        />
      </Hero.Content>
    </Hero>
  );
}

export default FeaturesStorage;