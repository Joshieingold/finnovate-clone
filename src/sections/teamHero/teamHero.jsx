import "./teamHero.css";
function TeamHero() {
    return (
        <section className="team-hero">
            <h1 className="team-hero-title">Meet the Team</h1>
            <div className="team-hero-image-wrapper">
                <img
                    src="https://finnovate.io/team-picture.jpg"
                    className="team-hero-image"
                />
            </div>
            <p className="team-hero-desc">
                Our diverse team solves problems with innovation and digital
                solutions, making positive impacts in multiple industries, while
                also sharing knowledge through workshops on finance and
                technology for software engineers, startup founders, and young
                people.
            </p>
        </section>
    );
}
export default TeamHero;
