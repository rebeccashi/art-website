import { useState } from "react";
import SeriesList from "@/components/SeriesList/SeriesList";
import SeriesPage from "@/components/SeriesPage/SeriesPage";
import {allSeries} from "@/data/artwork";
import "./Portfolio.css";
import Menu from '../../components/menu/Menu'

export default function Portfolio({ series = allSeries }) {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <>
      <Menu></Menu>
      <div className="portfolio">
        {activeKey ? (
          <SeriesPage
            series={allSeries.get(activeKey)}
            onBack={() => setActiveKey(null)}
          />
        ) : (
          <SeriesList
            series={series}
            onSelectSeries={setActiveKey}
          />
        )}
      </div>
    </>
  );
}
