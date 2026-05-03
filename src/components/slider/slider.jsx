import "./slider.css";
function Slider({ activeColor, isActive }) {
    const deactivatedColor = "#A9A9A3";
    const currentColor = isActive ? activeColor : deactivatedColor;
    const sliderLocation = isActive ? 60 : 2;

    return (
        <div className="slider" style={{ backgroundColor: currentColor }}>
            <span
                className="slider-circle"
                style={{ left: sliderLocation }}
            ></span>
        </div>
    );
}
export default Slider;
