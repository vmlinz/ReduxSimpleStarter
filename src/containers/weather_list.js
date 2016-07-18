import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

const TEMP = 'temp';
const PRESSURE = 'pressure';
const HUMIDITY = 'humidity';

function createWeatherChartData(weatherList, attrName) {
  const data = weatherList.map((weather) => weather.main[attrName]);
  return {
    labels: ['Today', 'Tomorrow', '3rd', '4th', '5th'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data,
      },
    ],
  };
}

function renderWeatherAttrChart(weatherList, attrName) {
  return (
    <Chart
      data={createWeatherChartData(weatherList, attrName)}
      width={240}
      height={180}
    />
  );
}

function renderWeather(cityData: Object) {
  const cityName: string = cityData.city.name;
  return (
    <tr key={cityName}>
      <td>{cityName}</td>
      <td>{renderWeatherAttrChart(cityData.list, TEMP)}</td>
      <td>{renderWeatherAttrChart(cityData.list, PRESSURE)}</td>
      <td>{renderWeatherAttrChart(cityData.list, HUMIDITY)}</td>
    </tr>
  );
}

function WeatherList(props: Object) {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {props.weather.map(renderWeather)}
        </tbody>
      </table>
    </div>
  );
}

WeatherList.propTypes = {
  weather: React.PropTypes.array.isRequired,
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
