import Contact from "../sections/contact/contact";
import Life from "../sections/life/life";
import TeamHero from "../sections/teamHero/teamHero";
import TeamImpact from "../sections/teamImpact/teamImpact";

function Team() {
    return (
        <>
            <TeamHero />
            <TeamImpact />
            <Life />
            <Contact title="Interested in joining us?" />
        </>
    );
}
export default Team;
