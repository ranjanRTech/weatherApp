import React, { useState } from 'react';
import classes from './Forecast.module.css';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
  

    let [zipcode, setZipcode] = useState('94040');
    let [condition, setCondition] = useState('current');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let apiId='d80a03ed78a86f1feb8f4897bbd21a3a'



function getForecast(e) {
    e.preventDefault();

    if (zipcode.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    
    setLoading(true);
    
    const uriEncodedCity = encodeURIComponent(zipcode);
    let apiUrl='';
    if(condition==='current')
    {
        apiUrl='http://api.openweathermap.org/data/2.5/weather?zip=';
    }
    else if(condition==='hourly')
    {
        apiUrl='http://api.openweathermap.org/data/2.5/forecast?zip='
    }
    else if(condition==='daily')
    {
        apiUrl='http://api.openweathermap.org/data/2.5/forecast?zip='
    }
    
    fetch(`${apiUrl}${zipcode}&APPID=${apiId}&units=metric`, {
        "method": "GET",
        "headers": {
           
        }
    })
    .then(response =>response.json())
    .then(response => {
        if (response.cod !== 200 && response.cod !== '200') {
            throw new Error()
        }
        setResponseObj(response);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
}
   return (
    <div>
    <h2>Find The Weather Conditions</h2>
    <form onSubmit={getForecast}>
        <input
            type="text"
            placeholder="Enter ZIP Code"
            maxLength="50"
            className={classes.textInput}
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            />
        <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="condition"
                        checked={condition === "current"}
                        value="current"
                        onChange={(e) => setCondition(e.target.value)}
                        />
                    Current
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="condition"
                        checked={condition === "hourly"}
                        value="hourly"
                        onChange={(e) => setCondition(e.target.value)}
                        />
                    Hourly
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="condition"
                        checked={condition === "daily"}
                        value="daily"
                        onChange={(e) => setCondition(e.target.value)}
                        />
                    Daily
                </label>

        <button className={classes.Button} type="submit">Get Forecast</button>
    </form>
    
    <Conditions
       responseObj={responseObj}
       error={error}
       loading={loading}
       condition={condition}
       />
</div>
   );
}
export default Forecast;