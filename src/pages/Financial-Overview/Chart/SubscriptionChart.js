import React from "react"
import ReactApexChart from "react-apexcharts"

const SubscriptionChart = () => {
  const series = [
    {
      data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
    },
  ]
  const options = {
    chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
          style: {
            borderRadius: "100%",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%"
        },
        offsetY: -20,
        style: {
          fontSize: "10px",
          colors: ["white"],
          
        },
      },

        colors: ["#4DFFDF"],
        borderRadius: ["100%"],
      grid: {
        borderColor: "#f1f1f1",
      },

    // colors: ["#34c38f", "#556ee6", "#f46a6a"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        },
      },
    },
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  )
}

export default SubscriptionChart
