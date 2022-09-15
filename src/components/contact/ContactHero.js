import { Hero, Button, Card, Input, Textarea, Form} from "react-daisyui";

function ContactHero() {
    return (
        <div className="py-8 space-y-10">        
        <div className="text-center">
            <h1 className="text-5xl">Need help with anything?</h1>
            <p>Let us know how we can help. Contact MyPass Manager Support.</p>
        </div>
        <Hero>
            <Hero.Content className="flex-col lg:flex-row">
            <img
                alt="Why do I need a password manager?"
                src="/img/contact-form.png"
                className="w-full rounded-lg"
            />
            <Card className="flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <Card.Body>
                <Form>
                    <Form.Label title="Your Name" />
                    <Input
                    type="text"
                    placeholder=""
                    className="input-bordered"
                    />
                </Form>
                <Form>
                    <Form.Label title="Email Address" />
                    <Input
                    type="text"
                    placeholder=""
                    className="input-bordered"
                    />
                </Form>
                <Form>
                    <Form.Label title="Brief description of your issue" />
                    <Textarea className="input-bordered" />
                </Form>
                <span className="text-sm font-light">By contacting us, you agree to our <a className="text-blue-600" href="legal/privacy">privacy policy</a>. Learn more about the information included when you use the contact form.</span>
                <Form className="mt-6">
                    <Button>Contact Support</Button>
                </Form>
                </Card.Body>
            </Card>
            </Hero.Content>
        </Hero>
        </div>
    );
}

export default ContactHero;