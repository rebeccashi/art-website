import { useState } from "react";
import SeriesList from "@/components/SeriesList/SeriesList";
import SeriesPage from "@/components/SeriesPage/SeriesPage";
import seriesList from "@/data/seriesList";
import "./Portfolio.css";
import Menu from '../../components/menu/Menu'

export default function Portfolio({ series = seriesList }) {
  const [activeSeries, setActiveSeries] = useState(null);

  return (
    <>
      <Menu></Menu>
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
    </>
  );
}
