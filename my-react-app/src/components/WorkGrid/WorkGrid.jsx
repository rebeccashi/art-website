import "./WorkGrid.css";

/**
 * WorkGrid
 *
 * Displays all works in a series as a responsive image grid.
 * Clicking a work calls onSelectWork with that work's index,
 * which the parent uses to open the Carousel.
 *
 * Props:
 *   works        {Array}    - Array of work objects
 *   onSelectWork {function} - Called with the clicked work's index
 */
export default function WorkGrid({ works, onSelectWork }) {
  return (
    <div className="work-grid">
      {works.map((work, index) => (
        <button
          key={work.id}
          className="work-grid__item"
          onClick={() => onSelectWork(index)}
          aria-label={`Open ${work.title}`}
        >
          <div className="work-grid__image-wrap">
            <img
              src={work.image}
              alt={work.title}
              className="work-grid__image"
              loading="lazy"
            />
          </div>

          <div className="work-grid__caption">
            <span className="work-grid__title">{work.title}</span>
            {work.medium && (
              <span className="work-grid__medium">{work.medium}</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
