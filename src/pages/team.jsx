import Contact from "../sections/contact/contact";
import Life from "../sections/life/life";
import TeamHero from "../sections/teamHero/teamHero";
import TeamImpact from "../sections/teamImpact/teamImpact";
import Values from "../sections/values/values";

function Team() {
    return (
        <>
            <TeamHero />
            <TeamImpact />
            <Values />
            <Life />
            <Contact title="Interested in joining us?" />
        </>
    );
}
export default Team;
