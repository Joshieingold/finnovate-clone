import "./wordstack.css";
function WordStack({ title, desc, buttonText, buttonFunc }) {
    return (
        <div className="wordstack">
            <h1 className="stack-title">{title}</h1>
            <p className="stack-desc">{desc}</p>
            <div>
                <button onClick={buttonFunc}>{buttonText}</button>
            </div>
        </div>
    );
}
export default WordStack;
