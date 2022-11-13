import { Footer } from "react-daisyui";

function DashboardFooter(){
    return (
        <Footer className="p-10 bg-neutral text-neutral-content">
            <div>
                <img className="w-10 h-10" src="/img/logo-white.svg" alt="MyPass Manager" />
                <p>
                    MyPass Manager
                    <br />
                    Providing reliable tech since 2002
                </p>
            </div>
    
            <div>
                <Footer.Title>Features</Footer.Title>
                <a href="features#storage" className="link link-hover">Storage</a>
                <a href="features#convenience" className="link link-hover">Convenience</a>
                <a href="features#security" className="link link-hover">Security</a>
            </div>
            <div>
                <Footer.Title>Company</Footer.Title>
                <a href="about" className="link link-hover">About us</a>
                <a href="contact" className="link link-hover">Contact</a>
            </div>
            <div>
                <Footer.Title>Legal</Footer.Title>
                <a href="legal/terms" className="link link-hover">Terms of use</a>
                <a href="legal/privacy" className="link link-hover">Privacy policy</a>
                <a href="legal/cookies" className="link link-hover">Cookie policy</a>
            </div>
        </Footer>
    );
}

export default DashboardFooter;