import "./App.css";
import Hero from "./sections/hero/hero";
import Navbar from "./sections/navbar/navbar";
import Company from "./sections/company/company";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import SoftwareTeams from "./sections/softwareTeams/softwareTeams";
import DeliverySteps from "./sections/deliverySteps/deliverySteps";
import Results from "./sections/results/results";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Company />
            <SoftwareTeams />
            <DeliverySteps />
            <Results />
            <Contact title="Tell us about your destination" />
            <Footer />
        </>
    );
}

export default App;
