import { Hero } from "react-daisyui";

function LandingFeatures(){
    return(
        <Hero className="py-8 px-8">
            <Hero.Content>
                <div className="space-y-8">
                    <h1 className="text-5xl font-bold">Better than your browser's password manager</h1>
                    <p>MyPass Manager is more secure, flexible, and convenient than the password manager built in to your browser.</p>
                    <ul className="list-disc list-inside space-y-8">
                        <li>Choose which logins you share with your family</li>
                        <li>Store more than just passwords</li>
                        <li>Get alerts about password breaches and security issues</li>
                        <li>Organize items using tags and categories</li>
                        <li>Use MyPass Manager as an authenticator</li>
                        <li>Recover accounts for other family members</li>
                        <li>Get expert email support</li>
                    </ul>
                </div>
                <img
                    alt="Peace of mind with MyPass Manager"
                    src="/img/peace-of-mind.svg"
                    className="max-w-sm rounded-lg "
                />
            </Hero.Content>
        </Hero>
    );
}

export default LandingFeatures;