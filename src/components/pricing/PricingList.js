import { Hero, Card, Button } from "react-daisyui";

function PricingList() {
    return (
        <Hero>
            <Hero.Content className="text-center text-white max-h-full" >
                <Card className="text-center w-2/5 border-black bg-blue-600	py-8 px-8">
                    <Card.Body className="items-center text-center">
                        <Card.Title tag="h2">MyPass Lite</Card.Title>
                        <p>All the apps to secure yourself online.</p>
                        <h1 className="font-extrabold text-6xl">$3</h1>
                        <p>USD per month, <br></br> billed annualy.</p>
                        <Button href="dashboard" className="bg-white text-blue-600">Try for 14 day</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center w-2/5 border-black bg-purple-900 py-8 px-8">
                    <Card.Body className="items-center text-center">
                        <Card.Title tag="h2">MyPass Pro</Card.Title>
                        <p>Includes extreme encrption and SSH key storage.</p>
                        <h1 className="font-extrabold text-6xl">$5</h1>
                        <p>USD per month, <br></br> billed annualy.</p>
                        <Button href="dashboard" className="bg-white text-purple-900">Try for 14 day</Button>
                    </Card.Body>
                </Card>
            </Hero.Content>
        </Hero>
    );
}

export default PricingList;