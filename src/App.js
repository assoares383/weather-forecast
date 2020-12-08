import { useEffect, useState } from "react";

import api from "./services/api";

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      console.log(response.data);
      setCity(response.data.results.city_name);
      setForecast(response.data.results.forecast);
    });
  }, []);

  return (
    <div className="container">
      <h1>{city}</h1>

      <table className="striped">
        <thead>
          <tr>
            <th>Data</th>
            <th>Min.</th>
            <th>Max.</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {forecast.map((item) => {
            return (
              <tr key={item.date}>
                <td>{item.date}</td>
                <td>{item.min}</td>
                <td>{item.max}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    src={`/assets/${item.condition}.svg`}
                    alt={item.condition}
                    width="24"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
