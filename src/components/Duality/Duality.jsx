"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { fillWithRandomText, replaceWithName } from "@/utils/client/duality";
import { useCurrentIdxGetter } from "./carousel-hook";

import image_1 from "@/assets/astro.png";
import image_2 from "@/assets/ice.png";
import words from "./words-list.json";

import "./Duality.scss";

export default function Duality() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 30,
  });

  const { selectedIndex } = useCurrentIdxGetter(emblaApi);

  function scrollPrev() {
    emblaApi.scrollPrev();
  }

  function scrollNext() {
    emblaApi.scrollNext();
  }

  useEffect(() => {
    fillWithRandomText();

    setTimeout(() => {
      replaceWithName(
        words.slice(Math.random * words.length, Math.random() * words.length)
      );
    }, 1000);
  }, []);

  const classNameModifierDarkBlock =
    selectedIndex % 2 === 0 ? "duality_left" : "duality_right";

  return (
    <div className={`scope-duality_bg ${classNameModifierDarkBlock}_bg`}>
      <div className="wrapper">
        <div className={`scope-duality`}>
          <div className="duality">
            <div
              id="filler"
              className={`duality__auto-text ${classNameModifierDarkBlock}`}
            ></div>
            <div className="carousel-wrapper">
              <div className={`carousel ${classNameModifierDarkBlock}`}>
                <div className="carousel__anchor" ref={emblaRef}>
                  <div className="carousel__container">
                    <div className="carousel__slide">
                      <div className="duality__main-content">
                        <div className="duality__text-wrapper">
                          <h2>Heading here</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quidem eligendi veritatis omnis suscipit
                            quibusdam nihil libero possimus commodi ea voluptas
                            quae maxime tempore quis vel, consectetur recusandae
                            provident, officiis non!
                          </p>
                        </div>
                        <div className="duality__image-wrapper">
                          <Image
                            src={image_1.src}
                            alt=""
                            height={image_1.height}
                            width={image_2.width}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="carousel__slide">
                      <div className="duality__main-content">
                        <div className="duality__text-wrapper">
                          <h2>Document Intelligent Proccessing</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quidem eligendi veritatis omnis suscipit
                            quibusdam nihil libero possimus commodi ea voluptas
                            quae maxime tempore quis vel, consectetur recusandae
                            provident, officiis non!
                          </p>
                        </div>
                        <div className="duality__image-wrapper">
                          <Image
                            src={image_2.src}
                            alt=""
                            width={image_2.width}
                            height={image_2.height}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <div className="duality__buttons-wrapper">
              <button className="carousel__prev-btn" onClick={scrollPrev}>
                Prev
              </button>
              <button className="carousel__next-btn" onClick={scrollNext}>
                Next
              </button>
            </div>
            <p className="utility-line">
              <span className="utility-whitespace"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
