import "./results.css";
import slideShowData from "../../assets/jsonData/result.json";
import SlideShow from "../../components/slideshow/slideshow";

function Results() {
    return (
        <section className="results-section">
            <div className="results-top">
                <h2 className="results-title">Real world results</h2>
                <p className="results-subtitle">
                    From seed stage startups to Fortune 500s, we build the
                    platforms that drive the next generation of business.
                </p>
            </div>
            <div className="results-bottom">
                <SlideShow data={slideShowData.slideShowData} />
            </div>
        </section>
    );
}
export default Results;
