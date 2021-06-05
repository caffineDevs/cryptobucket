import React, { useEffect, useState } from "react";
import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
// import ReactFC from "../lib/ReactFC";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = (res) => res.json();
const dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/column-line-combination-data.json"
).then(jsonify);
const schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/column-line-combination-schema.json"
).then(jsonify);

const dataSource = {
  chart: {},
  caption: {
    text: "Web visits & downloads",
  },
  subcaption: {
    text: "since 2015",
  },
  yaxis: [
    {
      plot: [
        {
          value: "Downloads",
          type: "column",
        },
        {
          value: "Web Visits",
          type: "line",
        },
      ],
    },
  ],
};

function Currencies() {
  const [state, setState] = useState({
    timeseriesDs: {
      type: "timeseries",
      renderAt: "container",
      width: "1800",
      height: "850",
      dataSource,
    },
  });

  useEffect(() => {
    onFetchData();
  }, []);

  const onFetchData = () => {
    Promise.all([dataFetch, schemaFetch]).then((res) => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = Object.assign({}, state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      setState({
        timeseriesDs,
      });
    });
  };

  return (
    <div>
      {state.timeseriesDs.dataSource.data ? (
        <ReactFC {...state.timeseriesDs} />
      ) : (
        "loading"
      )}
    </div>
  );
}

export default Currencies;
