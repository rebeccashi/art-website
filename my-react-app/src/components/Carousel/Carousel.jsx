import { useCarousel } from "@/hooks/useCarousel";
import "./Carousel.css";

/**
 * Carousel
 *
 * Full-screen lightbox that lets users browse works with
 * arrow buttons or keyboard arrow keys. Closes on Escape
 * or clicking the backdrop.
 *
 * Props:
 *   works      {Array}    - Array of work objects for this series
 *   startIndex {number}   - Index of the work that was clicked
 *   onClose    {function} - Called when the carousel should close
 */
export default function Carousel({ works, startIndex, onClose }) {
  const { index, prev, next } = useCarousel(works.length, startIndex, onClose);
  const work = works[index];

  return (
    <div
      className="carousel-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Work viewer"
    >
      {/* Stop clicks inside the panel from closing the overlay */}
      <div className="carousel-panel" onClick={(e) => e.stopPropagation()}>

        <button className="carousel-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="carousel-stage">
          <button className="carousel-nav" onClick={prev} aria-label="Previous">
            ‹
          </button>

          <div className="carousel-image-wrap">
            <img
              key={work.id}
              src={work.image}
              alt={work.title}
              className="carousel-image"
            />
          </div>

          <button className="carousel-nav" onClick={next} aria-label="Next">
            ›
          </button>
        </div>

        <footer className="carousel-meta">
          <span className="carousel-meta__title">{work.title}</span>
          {work.medium && <span className="carousel-meta__detail">{work.medium}</span>}
          {work.size   && <span className="carousel-meta__detail">{work.size}</span>}
          <span className="carousel-meta__counter">{index + 1} / {works.length}</span>
        </footer>

      </div>
    </div>
  );
}
