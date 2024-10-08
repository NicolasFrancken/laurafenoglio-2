import React from "react";
import "../../../app/thumbnails.css";

interface ProjectThumbnailProps {
  selected: boolean;
  s: string;
  onClick: () => void;
}

export function ProjectThumbnail({
  selected,
  s,
  onClick,
}: ProjectThumbnailProps) {
  return (
    <div
      className={"embla-thumbs__slide w-full ".concat(
        selected ? "embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <img src={s} alt="Project image" className="embla__slide__img" />
      </button>
    </div>
  );
}
