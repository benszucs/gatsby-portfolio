import React, { Component } from "react"
import Chart from "react-apexcharts"

class RadialChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        labels: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Redux", "D3"],
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function(w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              },
            },
          },
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      series: [90, 90, 86, 85, 79, 65],
    }
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height="400"
      />
    )
  }
}

export default RadialChart
