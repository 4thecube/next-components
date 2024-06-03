"use client";
import * as React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./page.scss";

export interface IAppProps {}

const elems = [
  {
    id: 1,
    name: "Ancient Greek",
  },
  {
    id: 2,
    name: "Historic people",
  },
  {
    id: 3,
    name: "Music genres",
  },
  {
    id: 4,
    name: "Ancient Rome",
  },
  {
    id: 5,
    name: "Country Flags",
  },
  {
    id: 6,
    name: "Poems",
  },
];

export default function App(props: IAppProps) {
  return (
    <div className="content">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={6}
        visibleSlides={3}
      >
        <Slider>
          {elems.map((el, idx) => (
            <Slide key={el.id} index={idx} className="inner-slide">
              <div className="card">{el.name}</div>
            </Slide>
          ))}
        </Slider>
        <DotGroup className="dot-group" />
      </CarouselProvider>
    </div>
  );
}
