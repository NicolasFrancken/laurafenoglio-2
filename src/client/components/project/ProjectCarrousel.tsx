import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ProjectThumbnail } from "./ProjectThumbnail";
import "../../../app/carrousel.css";

interface ProjectCarrouselProps {
  slides: string[];
  options?: EmblaOptionsType;
}

export default function ProjectCarrousel({
  slides,
  options,
}: ProjectCarrouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((s, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={s}
                alt="Project image"
                className="embla__slide__img w-full h-full  object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs w-full">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container pl-[0.4rem] md:pl-0">
            {slides.map((s, index) => (
              <ProjectThumbnail
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                s={s}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
