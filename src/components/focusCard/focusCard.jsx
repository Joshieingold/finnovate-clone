import "./focusCard.css";
function FocusCard({ data }) {
    return (
        <div className="focus-card">
            <div className="card-image-wrapper">
                <img src={data.img} />
            </div>
            <div className="card-text">
                <h4 className="card-title">{data.title}</h4>
                <p className="card-desc">{data.desc}</p>
            </div>
        </div>
    );
}
export default FocusCard;
