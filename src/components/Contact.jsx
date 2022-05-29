import { useState } from "react";
import ButtonFb from "./ButtonFb";

const Contact = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");

  return (
    <footer className="contact" id="contact">
      <div className="contact__content">
        <div className="contact__content__title">
          <span>Contact Me</span>
        </div>
        <div className="contact__content__text">
          <div className="contact__content__text__media-icons">
            <a
              href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9rick-blaizoud"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/fblaizoud"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="contact__content__text__email">
            <div className="contact__content__text__email__topic">
              Would you like to send me an email?
            </div>
            <ButtonFb link="mailto:fblaizoud@gmail.com" text="This way!" />
          </div>
          {!finalName ? (
            <div className="contact__content__text__form">
              <form>
                <div className="contact__content__text__form__outer">
                  <div className="contact__content__text__form__outer__inner">
                    <div>What&apos;s your name ?</div>
                    <input
                      className="finder__iput"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <a href="#thanks" onClick={() => setFinalName(name)}>
                      Submit
                    </a>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div
              id="thanks"
              className="contact__content__text__thanks"
            >{`Thank you for your visit ${finalName}. Have a nice day 🙂`}</div>
          )}
        </div>
        <span>
          <a href="#home">fblaizoud.dev</a>
          {` | © ${currentYear}`}
        </span>
      </div>
    </footer>
  );
};

export default Contact;
