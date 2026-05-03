import "./accordionItem.css";
import { useState } from "react";

function AccordionItem({ title, desc }) {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <div className={`accordion-item ${isActive ? "active" : ""}`}>
            <span
                className={`active-bubble ${isActive ? "" : "transparent-circle"}`}
            ></span>
            <div className="accordion-content">
                <h2
                    onClick={handleClick}
                    className={`accordion-title ${isActive ? "" : "inactive-title"}`}
                >
                    {title}
                </h2>
                <div
                    className={`accordion-p-container ${isActive ? "" : "no-height"}`}
                >
                    <p
                        className={`accordion-paragraph ${isActive ? "" : "hidden-text"}`}
                    >
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;
