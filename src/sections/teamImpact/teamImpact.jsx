import FocusCard from "../../components/focusCard/focusCard";
import "./teamImpact.css";
function TeamImpact() {
    let cardOne = {
        img: "https://finnovate.io/_next/static/media/people.6a5e5eb6.svg",
        title: "The People",
        desc: "Who we hire, collaborate with, and serve",
    };
    let cardTwo = {
        img: "https://finnovate.io/_next/static/media/product.3199a80e.svg",
        title: "The Product",
        desc: "Our services, their features, and how they benefit you",
    };
    let cardThree = {
        img: "https://finnovate.io/_next/static/media/process.0af88893.svg",
        title: "The Process",
        desc: "Our decision-making approact and consideration of stakeholder",
    };

    return (
        <section className="team-impact-section">
            <div className="team-impact-text-container">
                <div className="team-impact-title-wrapper">
                    <span>Driving growth through</span>
                    <span className="blue-text"> innovation</span>
                    <span> and</span>
                    <span className="blue-text"> impact</span>
                </div>
                <p className="team-impact-desc">
                    Our focus is on providing you with the best possible
                    experience, from the people we hire to the services we offer
                    and the processes we follow.
                </p>
            </div>
            <div className="team-impact-card-container">
                <FocusCard data={cardOne}></FocusCard>
                <FocusCard data={cardTwo}></FocusCard>
                <FocusCard data={cardThree}></FocusCard>
            </div>
        </section>
    );
}
export default TeamImpact;
