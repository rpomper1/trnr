import Chart from "./";

const WeightProgressChart = ({ data }) => {
  // Create the chart
  const options = {
    series: data,
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true
      }
    },
    stroke: {
      curve: "smooth"
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
      style: "hollow"
    },
    xaxis: {
      type: "datetime"
    },
    // yaxis: {
    //   max: function (val) {
    //     return val + 5;
    //   }
    // },
    tooltip: {
      shared: true,
      x: {
        format: "dd MMM yyyy"
      }
    }
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={options.series} type="line" />
        </div>
      </div>
    </div>
  );
};

export default WeightProgressChart;
