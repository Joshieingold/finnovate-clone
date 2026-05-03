import Hero from "../sections/hero/hero";
import Company from "../sections/company/company";
import Contact from "../sections/contact/contact";
import SoftwareTeams from "../sections/softwareTeams/softwareTeams";
import DeliverySteps from "../sections/deliverySteps/deliverySteps";
import Results from "../sections/results/results";

function Home() {
    return (
        <>
            <Hero />
            <Company />
            <SoftwareTeams />
            <DeliverySteps />
            <Results />
            <Contact title="Tell us about your destination" />
        </>
    );
}
export default Home;
