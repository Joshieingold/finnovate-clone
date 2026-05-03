import "./softwareTeams.css";
import WordStack from "../../components/wordstack/wordstack";
import Slider from "../../components/slider/slider";
import { useState } from "react";

function SoftwareTeams() {
    const [allSlide, setAllSlide] = useState(false);
    const stackTitle =
        "Most agencies build software. We build products that matter";
    const stackDesc =
        "We pair human expertise with intelligent technologies to produce digital products that seamlessly align with your business goals.";
    const buttonText = "Work with us";

    function placeholder() {
        if (allSlide) {
            setAllSlide(false);
        } else {
            setAllSlide(true);
        }
    }
    let sliderOne = allSlide;
    let sliderTwo = allSlide;
    let sliderThree = allSlide;
    let sliderFour = allSlide;
    let sliderFive = allSlide;

    return (
        <section className="software-teams-section">
            <div className="teams-left">
                <WordStack
                    title={stackTitle}
                    desc={stackDesc}
                    buttonText={buttonText}
                    buttonFunc={placeholder}
                />
            </div>
            <div className="teams-right">
                <h2 className="teams-subtitle">
                    Our cross-functional teams combine
                </h2>
                <div className="slider-container">
                    <Slider
                        id="slider-one"
                        isActive={sliderOne}
                        activeColor="#FFC433"
                    ></Slider>
                    <label htmlFor="slider-one" className="slider-label">
                        Product strategy
                    </label>
                </div>
                <div className="slider-container">
                    <Slider
                        id="slider-two"
                        isActive={sliderTwo}
                        activeColor="#7BB969"
                    ></Slider>
                    <label htmlFor="slider-two" className="slider-label">
                        UX design
                    </label>
                </div>
                <div className="slider-container">
                    <Slider
                        id="slider-three"
                        isActive={sliderThree}
                        activeColor="#7A6FED"
                    ></Slider>
                    <label htmlFor="slider-three" className="slider-label">
                        AI engineering
                    </label>
                </div>
                <div className="slider-container">
                    <Slider
                        id="slider-four"
                        isActive={sliderFour}
                        activeColor="#4375E9"
                    ></Slider>
                    <label htmlFor="slider-four" className="slider-label">
                        Full-stack development
                    </label>
                </div>
                <div className="slider-container">
                    <Slider
                        id="slider-five"
                        isActive={sliderFive}
                        activeColor="#27AAE1"
                    ></Slider>
                    <label htmlFor="slider-five" className="slider-label">
                        Cloud & DevOps
                    </label>
                </div>
            </div>
        </section>
    );
}
export default SoftwareTeams;
