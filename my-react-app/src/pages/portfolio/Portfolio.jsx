import { useState } from "react";
import SeriesList from "@/components/SeriesList/SeriesList";
import SeriesPage from "@/components/SeriesPage/SeriesPage";
import seriesList from "@/data/seriesList";
import "./Portfolio.css";

/**
 * Portfolio
 *
 * Top-level component. Renders either the SeriesList (all series)
 * or a SeriesPage (single series + works grid) depending on which
 * series the user has selected.
 *
 * Props:
 *   series {Array} - Optional. Array of series objects.
 *                    Defaults to sampleSeries if not provided.
 *
 * Usage:
 *   <Portfolio />
 *   <Portfolio series={mySeriesData} />
 */
export default function Portfolio({ series = seriesList }) {
  const [activeSeries, setActiveSeries] = useState(null);

  return (
    <div className="portfolio">
      {activeSeries ? (
        <SeriesPage
          series={activeSeries}
          onBack={() => setActiveSeries(null)}
        />
      ) : (
        <SeriesList
          series={series}
          onSelectSeries={setActiveSeries}
        />
      )}
    </div>
  );
}
