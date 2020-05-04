import React, { PropTypes } from 'react';

// import '../../CSS/components/TodayForecast.scss';


const TodayForecast = (props) => 
 {
  const { todayData } = props;
  const {units}='Kelvin';
  const {unitsspeed}='meter/sec';

  return (
    <div className="rw-today">
      <div className="date"> {todayData.name} {" "} {todayData.sys.country} </div>
      <div className="hr"></div>
      <div className="current">Temperature : {todayData.main.temp}<span>&#8451;</span></div>
      <div className="range">Minimum/Maximum Temperature: {todayData.main.temp_max}&deg; / {todayData.main.temp_min}<span>&#8451;</span></div>
      <div className="desc">       
        {todayData.weather[0].description}
      </div>
      <div className="hr"></div>
      <div className="info">
        <div> Wind : <b>{todayData.wind.speed}</b> meter/sec</div>
        <div>Humidity: <b>{todayData.main.humidity}</b> %</div>
      </div>
    </div>
  );
};
export default TodayForecast;