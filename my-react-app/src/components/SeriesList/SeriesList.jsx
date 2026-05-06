import "./SeriesList.css";

/**
 * SeriesList
 *
 * Landing view showing all series as alternating image/text rows.
 * Clicking a card calls onSelectSeries with that series object.
 *
 * Props:
 *   series         {Array}    - Array of series objects
 *   onSelectSeries {function} - Called with the clicked series object
 */
export default function SeriesList({ series, onSelectSeries }) {
  return (
    <div className="series-list">
      {series.map((s) => (
        <button
          key={s.id}
          className="series-card"
          onClick={() => onSelectSeries(s)}
        >
          <div className="series-card__image-wrap">
            <img
              src={s.cover}
              alt={s.title}
              className="series-card__image"
              loading="lazy"
            />
          </div>

          <div className="series-card__body">
            <h2 className="series-card__title">{s.title}</h2>
            <span className="series-card__meta">
              {s.year} · {s.works.length} works
            </span>
            {s.description && (
              <p className="series-card__description">{s.description}</p>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
