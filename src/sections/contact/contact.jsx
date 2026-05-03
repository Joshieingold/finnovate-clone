import "./contact.css";
function Contact({ title }) {
    return (
        <section className="contact-section">
            <div className="contact-wrapper">
                <p className="contact-subheader">Contact us</p>
                <h2 className="contact-header">{title}</h2>
                <form>
                    <div className="contact-input-container">
                        <div className="input-wrapper">
                            <label htmlFor="first-name">First name*</label>
                            <input id="first-name" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="last-name">Last name*</label>
                            <input id="last-name" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email*</label>
                            <input id="email" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="phone">Phone number</label>
                            <input id="phone" />
                        </div>
                    </div>
                    <textarea
                        placeholder="Your message"
                        className="contact-textarea"
                    />
                    <div>
                        <button>Submit →</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;
