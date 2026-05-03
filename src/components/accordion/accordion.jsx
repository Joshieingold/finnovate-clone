import "./accordion.css";
import AccordionItem from "../accordionItem/accordionItem";
function Accordion({ json }) {
    const passedData = json.items;
    return (
        <div className="accordion-container">
            {passedData.map((item) => (
                <AccordionItem
                    title={item.deliveryTitle}
                    desc={item.deliveryDesc}
                    key={item.key}
                ></AccordionItem>
            ))}
        </div>
    );
}
export default Accordion;
