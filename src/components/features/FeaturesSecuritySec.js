import { Hero, Link } from "react-daisyui";

function FeaturesSecuritySec() {
  return (
    <Hero className="rounded-lg px-10 py-10">
        <Hero.Overlay className="bg-blue-50" />
      <Hero.Content className="rounded-lg px-10 py-10">
        <img
          alt="Security"
          src="/img/private-by-design.svg"
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">MyPass is private by design.</h1>
          <p className="py-6">
            Your data is yours, and we don't want to know anything about it. 
            We don't use it, we don't share it, and we don't sell it.
          </p>
          <hr className="my-2"></hr>
            <p>
                We only collect the information necessary to provide our services and help you with troubleshooting. 
                Personally identifiable information is never shared with third parties.
            </p>
          <Link color="primary">Learn more about 1Password and your privacy </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default FeaturesSecuritySec;