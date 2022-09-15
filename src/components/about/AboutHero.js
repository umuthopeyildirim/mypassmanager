import { Hero, Button } from "react-daisyui"

function AboutHero() {
  return (
    <Hero
        style={{
        backgroundImage:
            'url(/img/about-header.png)',
        height: '480px',
        }}
    >
        <Hero.Overlay/>
        <Hero.Content className="text-center">
        <div className="max-w-md">
            <h1 className="text-5xl font-bold">Secure password manager</h1>
            <p className="py-6">
                Online security is so important that it needs to be easy for everyone. Learn how simple it is to keep your accounts secure with 1Password.
            </p>

            <Button href="pricing" color="accent">Try it for 14 days</Button>
        </div>
        </Hero.Content>
    </Hero>
  );
}

export default AboutHero;