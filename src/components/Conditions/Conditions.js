import React from 'react';
import classes from './Conditions.module.css'
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Typography,
    Grid,
  } from "@material-ui/core";
import TodayForecast  from './TodayForecast'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'
import dayjs from "dayjs";

const conditions = (props) => {
  function getDailyData()
  {
     let dayForecast=[];
     let index=0;
     props.responseObj.list.map(f=>
        {
            if(dayForecast.length===0)
            {
                index++;
                dayForecast.push(f); 
            }
            else if(dayForecast.filter(d=>dayjs(d.dt_txt).format("dddd")==dayjs(f.dt_txt).format("dddd")).length===0 && index<5)
            {
                index++
                dayForecast.push(f);
            }
        });
      return dayForecast;
      
  }
    return (
        <div className={classes.Wrapper}>

            {props.error && <small className={classes.Small}>Please enter a valid zipcode.</small>}

            {props.loading && <div className={classes.Loader} />}

            {props.responseObj.cod === 200 ||props.responseObj.cod === '200' ? props.condition==='current' && !props.responseObj.list?
                <div>
    
             <TodayForecast
               todayData={props.responseObj}
               error={props.error}
               loading={props.loading}
               />       
                </div>
                
                : props.condition==="daily" && props.responseObj.list ?
                <div>
           
                <DailyForecast
                  forecastData={getDailyData()}
                  error={props.error}
                  loading={props.loading}
                  cityInfo={props.responseObj.city}
                  />       
                   </div>
                   
                   :props.condition==='hourly' && props.responseObj.list?

                <div>
    
             <HourlyForecast
               forecastData={props.responseObj.list }
               error={props.error}
               loading={props.loading}
               cityInfo={props.responseObj.city}
               /> 
               </div> 
            :null     
            : null
            }
        </div>
    )
}

export default conditions;