import "./SeriesList.css";

/**
 * SeriesList
 *
 * Landing view showing all series as alternating image/text rows.
 * Clicking a card calls onSelectSeries with that series object.
 *
 * Props:
 *   series         {Map}    - k: series name, v: series object
 *   onSelectSeries {function} - Called with the clicked series object
 */
export default function SeriesList({ series, onSelectSeries }) {
  return (
    <div className="series-list">
      {Array.from(series).map(([name, series]) => {
        console.log(name, series);
        return (
        <button
          key={series.id}
          className="series-card"
          onClick={() => onSelectSeries(name)}
        >
          <div className="series-card__image-wrap">
            <img
              src={series.cover}
              alt={series.title}
              className="series-card__image"
              loading="lazy"
            />
          </div>

          <div className="series-card__body">
            <h2 className="series-card__title">{series.title}</h2>
            <span className="subtext series-card__meta">
              {series.year} · {series.works?.length} works
            </span>
            {series.description && (
              <p className="series-card__description">{series.description}</p>
            )}
          </div>
        </button>
      )
      }
      )}
    </div>
  );
}
