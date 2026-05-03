import "./slideshow.css";
import { useState } from "react";

function SlideShow({ data }) {
    const [index, setIndex] = useState(0);
    const currentSlide = data[index];

    const handleButtonClick = (newIndex) => {
        setIndex(newIndex);
    };

    return (
        <div className="slideshow-content">
            <div className="slideshow-button-container">
                {data.map((item, idx) => (
                    <span
                        className={`slideshow-button ${idx === index ? "selected" : ""}`}
                        key={item.key}
                        onClick={() => handleButtonClick(idx)}
                    >
                        {item.title}
                    </span>
                ))}
            </div>
            <div className="slide-wrapper">
                <div className="slide-image-container">
                    <img src={currentSlide.img} alt="Slide" />
                </div>
                <div className="slide-content-container">
                    <div className="slide-logo-container">
                        <img
                            src={currentSlide.logo}
                            className="slide-logo"
                            alt="Logo"
                        />
                    </div>
                    <p className="slide-desc">{currentSlide.desc}</p>
                    <div>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideShow;
