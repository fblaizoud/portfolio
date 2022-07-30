import React, { useState } from "react";

import projets from "../../data/projets";
import ButtonFb from "./ButtonFb";

const ProjectsCarousel = () => {
  const [itemSlected, setItemSelected] = useState<number>(0);

  return (
    <div className="carouselContainer">
      <div className="carouselContainer__navigationBullets">
        {projets &&
          projets.map((projet, index) => (
            <div
              key={index}
              role="button"
              className={`carouselContainer__navigationBullets__bullet${
                itemSlected === index ? " active" : ""
              }`}
              onClick={() => setItemSelected(index)}
              onKeyDown={() => setItemSelected(index)}
              tabIndex={0}
            ></div>
          ))}
      </div>
      <div className="carouselContainer__carousel">
        <div className="carouselContainer__carousel__nav">
          <span
            id="moveLeft"
            className="carouselContainer__carousel__nav__arrow"
            role="button"
            tabIndex={0}
            onClick={() =>
              itemSlected !== 0
                ? setItemSelected(itemSlected - 1)
                : setItemSelected(projets.length - 1)
            }
            onKeyDown={() =>
              itemSlected !== 0
                ? setItemSelected(itemSlected - 1)
                : setItemSelected(projets.length - 1)
            }
          >
            <svg
              className="carouselContainer__carousel__nav__arrow__left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
            </svg>
          </span>
          <span
            id="moveRight"
            className="carouselContainer__carousel__nav__arrow"
            role="button"
            tabIndex={0}
            onClick={() =>
              itemSlected !== projets.length - 1
                ? setItemSelected(itemSlected + 1)
                : setItemSelected(0)
            }
            onKeyDown={() =>
              itemSlected !== projets.length - 1
                ? setItemSelected(itemSlected + 1)
                : setItemSelected(0)
            }
          >
            <svg
              className="carouselContainer__carousel__nav__arrow__right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </span>
        </div>
        {projets &&
          projets.map((projet, index) => (
            <div
              key={index}
              className={`carouselContainer__carousel__carousel-item${
                itemSlected === index ? " active" : ""
              }`}
            >
              <img src={projet.img} alt={projet.title} />
              <div className="carouselContainer__carousel__carousel-item__info">
                <div className="carouselContainer__carousel__carousel-item__info__container">
                  <h2 className="carouselContainer__carousel__carousel-item__info__container__subtitle">
                    {projet.subtitle}
                  </h2>
                  <h1 className="carouselContainer__carousel__carousel-item__info__container__title">
                    {projet.title}
                  </h1>
                  <p className="carouselContainer__carousel__carousel-item__info__container__description">
                    {projet.description}
                  </p>
                  <div className="carouselContainer__carousel__carousel-item__info__container__btn">
                    <ButtonFb link={projet.link} text={"Let's go !"} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
