import { useState } from "react";
import "./values.css";

function Values() {
    let [selected, setSelected] = useState(1);
    function isCardOffScreen(cardVal) {
        if (selected > cardVal) {
            return true;
        }
        return false;
    }
    return (
        <section className="value-section">
            <div className="selector-container">
                <span className="flash-card-selector">
                    <span
                        onClick={() => setSelected(1)}
                        className={`flash-text ${selected == 1 ? "flash-selected-text" : ""}`}
                    >
                        1. Transparency
                    </span>
                </span>
                <span className="flash-card-selector">
                    <span
                        onClick={() => setSelected(2)}
                        className={`flash-text ${selected == 2 ? "flash-selected-text" : ""}`}
                    >
                        2. Quality
                    </span>
                </span>
                <span className="flash-card-selector">
                    <span
                        onClick={() => setSelected(3)}
                        className={`flash-text ${selected == 3 ? "flash-selected-text" : ""}`}
                    >
                        3. Efficiency
                    </span>
                </span>
                <span className="flash-card-selector">
                    <span
                        onClick={() => setSelected(4)}
                        className={`flash-text ${selected == 4 ? "flash-selected-text" : ""}`}
                    >
                        4. Security
                    </span>
                </span>
            </div>
            <div className="flash-card-container">
                <div
                    className={`flash-card ${selected == 1 ? "flash-selected-card" : ""} ${isCardOffScreen(1) ? "off-screen" : ""}`}
                >
                    <div className="flash-img-wrapper">
                        <img
                            className="flash-img"
                            src="https://finnovate.io/_next/static/media/transparency.5a4e7d02.png"
                        />
                    </div>
                    <h4 className="flash-title">Transparency</h4>
                    <p className="flash-desc">
                        We believe in open communication and transparency in
                        everything we do. We strive to build trust with our
                        clients by being honest, clear, and direct in our
                        interactions.
                    </p>
                </div>
                <div
                    className={`flash-card ${selected == 2 ? "flash-selected-card" : ""}${isCardOffScreen(2) ? "off-screen" : ""}`}
                >
                    <div className="flash-img-wrapper">
                        <img
                            className="flash-img"
                            src="https://finnovate.io/_next/static/media/quality.cc2fbf3d.svg"
                        />
                    </div>
                    <h4 className="flash-title">Quality</h4>
                    <p className="flash-desc">
                        We are committed to delivering high-quality work and
                        exceeding our clients' expectations. We take pride in
                        our attention to detail and our dedication to creating
                        exceptional products that meet our clients' needs.
                    </p>
                </div>
                <div
                    className={`flash-card ${selected == 3 ? "flash-selected-card" : ""} ${isCardOffScreen(3) ? "off-screen" : ""}`}
                >
                    <div className="flash-img-wrapper">
                        <img
                            className="flash-img"
                            src="https://finnovate.io/_next/static/media/efficiency.2307ab5f.svg"
                        />
                    </div>
                    <h4 className="flash-title">Efficiency</h4>
                    <p className="flash-desc">
                        We understand the importance of delivering projects on
                        time and within budget. Our team works efficiently and
                        collaboratively to ensure that we meet our clients'
                        deadlines and achieve their goals.
                    </p>
                </div>
                <div
                    className={`flash-card ${selected == 4 ? "flash-selected-card" : ""} ${isCardOffScreen(4) ? "off-screen" : ""}`}
                >
                    <div className="flash-img-wrapper">
                        <img
                            className="flash-img"
                            src="https://finnovate.io/_next/static/media/security.4cc9e02f.svg"
                        />
                    </div>
                    <h4 className="flash-title">Security</h4>
                    <p className="flash-desc">
                        We take the security of our clients' information
                        seriously. We have implemented strong security measures
                        and protocols to ensure that our clients' data is
                        protected at all times.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Values;
