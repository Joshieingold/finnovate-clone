import "./deliverySteps.css";
import WordStack from "../../components/wordstack/wordstack";
import Accordion from "../../components/accordion/accordion";
import rawData from "../../assets/jsonData/delivery.json";

function DeliverySteps() {
    const stackTitle = "Precision at every step of product delivery";
    const stackDesc =
        "Great products don't happen by accident. We follow a transparent, AI-assisted methodology that ensures every feature serves a business purpose. No bloated software.";
    const stackButtonText = "Work with us";
    function placeholder() {
        console.log("What are you doing looking in the console?");
    }
    return (
        <section className="delivery-steps-section">
            <div className="delivery-left">
                <WordStack
                    title={stackTitle}
                    desc={stackDesc}
                    buttonText={stackButtonText}
                    buttonFunc={placeholder}
                />
            </div>
            <div className="delivery-right">
                <Accordion json={rawData} />
            </div>
        </section>
    );
}
export default DeliverySteps;
