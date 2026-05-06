import { useState } from "react";
import WorkGrid from "../WorkGrid/WorkGrid";
import Carousel from "../Carousel/Carousel";
import "./SeriesPage.css";

/**
 * SeriesPage
 *
 * Shows the header info for one series, then a WorkGrid below.
 * Manages which work (if any) is open in the Carousel lightbox.
 *
 * Props:
 *   series {object}   - The series object to display
 *   onBack {function} - Called when the user navigates back to SeriesList
 */
export default function SeriesPage({ series, onBack }) {
  const [openWorkIndex, setOpenWorkIndex] = useState(null);

  return (
    <div className="series-page">

      <button className="series-page__back-btn" onClick={onBack}>
        ← All Series
      </button>

      <header className="series-page__header">
        <h1 className="series-page__title">{series.title}</h1>
        <span className="series-page__year">{series.year}</span>
        {series.description && (
          <p className="series-page__description">{series.description}</p>
        )}
      </header>

      <WorkGrid
        works={series.works}
        onSelectWork={setOpenWorkIndex}
      />

      {openWorkIndex !== null && (
        <Carousel
          works={series.works}
          startIndex={openWorkIndex}
          onClose={() => setOpenWorkIndex(null)}
        />
      )}

    </div>
  );
}
