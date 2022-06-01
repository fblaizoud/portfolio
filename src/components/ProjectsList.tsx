import React, { useState } from "react";

import ButtonFb from "./ButtonFb";

const ProjectsList = () => {
  const [itemSlected, setItemSelected] = useState(1);

  return (
    <div className="neumorphic-tab-container">
      <div className="neumorphic-tab-container__controls">
        <div
          className={
            itemSlected === 1
              ? "neumorphic-tab-container__controls__control_active"
              : "neumorphic-tab-container__controls__control_inactive"
          }
          onClick={() => setItemSelected(1)}
          onKeyDown={() => setItemSelected(1)}
          role="button"
          tabIndex={0}
        >
          Oh my quote!
        </div>
        <div
          className={
            itemSlected === 2
              ? "neumorphic-tab-container__controls__control_active"
              : "neumorphic-tab-container__controls__control_inactive"
          }
          onClick={() => setItemSelected(2)}
          onKeyDown={() => setItemSelected(2)}
          role="button"
          tabIndex={0}
        >
          Green my mind
        </div>
        <div
          className={
            itemSlected === 3
              ? "neumorphic-tab-container__controls__control_active"
              : "neumorphic-tab-container__controls__control_inactive"
          }
          onClick={() => setItemSelected(3)}
          onKeyDown={() => setItemSelected(3)}
          role="button"
          tabIndex={0}
        >
          Petite Amour
        </div>
      </div>
      <div
        className={
          itemSlected === 1
            ? "neumorphic-tab-container__tab_active"
            : "neumorphic-tab-container__tab_inactive"
        }
        id="petiteamour"
      >
        <img
          className="neumorphic-image"
          height="300"
          src="./assets/oh my quote.jpg"
          alt="quote"
        />
        <div className="text">
          <h2>Oh my quote!</h2>
          <p>
            A quotation website with the possibility to customize your favorite
            quote and share it on social networks.
          </p>
          <p>First project done in ReactJs/Tailwind.</p>
          <p>Use of an API with axios.</p>
          <ButtonFb link="https://oh-my-quote.vercel.app/" text="Let's go!" />
        </div>
      </div>
      <div
        className={
          itemSlected === 2
            ? "neumorphic-tab-container__tab_active"
            : "neumorphic-tab-container__tab_inactive"
        }
        id="ohmyquote"
      >
        <img
          className="neumorphic-image"
          height="300"
          src="./assets/green my mind.jpg"
          alt="ecology"
        />
        <div className="text">
          <h2>Green my mind</h2>
          <p>
            Hackathon project on the theme of ecology completed in 30 hours.
          </p>
          <p>Realized in ReactJs/Sass.</p>
          <ButtonFb link="https://green-my-mind.vercel.app/" text="Let's go!" />
        </div>
      </div>
      <div
        className={
          itemSlected === 3
            ? "neumorphic-tab-container__tab_active"
            : "neumorphic-tab-container__tab_inactive"
        }
        id="projet3"
      >
        <img
          className="neumorphic-image"
          height="300"
          src="./assets/petite amour.jpg"
          alt="jewelry"
        />
        <div className="text">
          <h2>Petite Amour</h2>
          <p>
            I made this website based on Wordpress for my wife&apos;s jewelry
            company.
          </p>
          <ButtonFb link="https://petiteamour.fr/" text="Let's go!" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
