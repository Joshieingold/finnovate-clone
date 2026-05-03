import "./life.css";
function Life() {
    return (
        <section className="life-section">
            <p>Life at Finnovate</p>
            <div className="life-image-container">
                <div className="life-image-wrapper img-wrapper-one">
                    <div className="life-image life-backdrop life-one">
                        <img src="https://finnovate.io/_next/static/media/bg-dots-desktop.1a44d481.svg" />
                    </div>
                    <div className="life-image">
                        <img src="https://finnovate.io/_next/static/media/team-1.2d4de2c5.png" />
                    </div>
                </div>
                <div className="life-image-wrapper img-wrapper-two">
                    <div className="life-image life-backdrop life-two">
                        <img src="https://finnovate.io/_next/static/media/bg-dots-desktop.1a44d481.svg" />
                    </div>
                    <div className="life-image">
                        <img src="https://finnovate.io/_next/static/media/team-2.123d2edb.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Life;
