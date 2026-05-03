import "./hero.css";
function Hero() {
    return (
        <section className="hero-section blue">
            <div className="hero-left">
                <h1 className="hero-heading">
                    We build impactful products that scale with your ambition
                </h1>
                <h4 className="hero-subheading">
                    We are your trusted technology partner for building
                    next-generation digital products in finance and education.
                </h4>
                <div className="hero-button">
                    <button>Get In Touch</button>
                </div>
            </div>
            <div className="hero-right"></div>
        </section>
    );
}
export default Hero;
