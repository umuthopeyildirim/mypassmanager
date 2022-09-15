import CoreBar from "../components/CoreBar";
import ContactHero from "../components/contact/ContactHero";
import CoreFooter from "../components/CoreFooter";

// TODO: Add another component for the contact form
// TODO: Make sure contact can send an email to support
function Contact(){
    return (
        <div>
            <CoreBar />
            <ContactHero />
            <CoreFooter />
        </div>
    );
}

export default Contact;