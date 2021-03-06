import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: ["USA", "CHINA", "AUSTRALIA", "INDIA", "CANADA"],
  datasets: [
    {
      label: "Covid-19",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [81, 100, 80, 71, 56],
    },
  ],
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "country Cases",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
export default App;
