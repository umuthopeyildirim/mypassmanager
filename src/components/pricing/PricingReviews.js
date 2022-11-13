import { Hero, Card, Rating } from "react-daisyui";

function PricingReviews() {
    return (
        <>
            <h1 className="bg-opacity-10 text-center text-7xl pt-14 italic font-semibold">Loved and used by millions.</h1>
            <Hero>
                <Hero.Content className="text-center max-h-full	" >
                    <Card className="text-center w-2/5 border-black bg-white">
                        <Card.Body className="items-center text-cente">
                            <Rating>
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </Rating>
                            <Card.Title tag="h2">I've used MyPass for a few years</Card.Title>
                            <p>and it has proven time and time again how valuable it is to me. Managing my passwords across my devices is so easy with my subscription.</p>
                            <Card.Actions className="justify-end">
                            <img src="/img/trustpilot-logo.svg" class="o-image u-alignself-start u-mt-auto" alt="Trustpilot logo"></img>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                    <Card className="text-center w-2/5 border-black bg-white">
                        <Card.Body className="items-center text-cente">
                            <Rating>
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </Rating>
                            <Card.Title tag="h2">Security upgrade for all your accounts</Card.Title>
                            <p>Don’t look at this as a standalone app, but as a significant security upgrade for all of your accounts, as well as a safe for sensitive data like bank accounts, license keys, etc.</p>
                            <Card.Actions className="justify-end">
                            <img src="/img/trustpilot-logo.svg" class="o-image u-alignself-start u-mt-auto" alt="Trustpilot logo"></img>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                    <Card className="text-center w-2/5 border-black bg-white">
                        <Card.Body className="items-center text-cente">
                            <Rating>
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </Rating>
                            <Card.Title tag="h2">Amazing!</Card.Title>
                            <p>I highly recommend this product and this company to anyone looking for a password management solution.</p>
                            <Card.Actions className="justify-end">
                            <img src="/img/trustpilot-logo.svg" class="o-image u-alignself-start u-mt-auto" alt="Trustpilot logo"></img>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </Hero.Content>
            </Hero>
        </>
    );
}

export default PricingReviews;