import React, { PropTypes } from 'react';
import dayjs from "dayjs";

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

export default function HourlyForecast(props) {
  const { forecast } = props.forecastData;
console.log(props);
  const result = props.forecastData.map((item, index) => {
    return (
      <div>
       
        <ListItem key={index} className="forecastItem">
           <ListItemText
            className="week-day"
            primary={dayjs(item.dt_txt).format("dddd HH:mm:ss A")}
            style={{ flex: "1 1 0%", textAlign: "left" }}
          ></ListItemText>
         
         <ListItemText
            className="week-day"
            primary={item.weather[0].description}
            style={{ flex: "1 1 0%", textAlign: "center",  }}
          ></ListItemText>
            
          
          <span className="temp" style={{ flex: "1 1 0%", textAlign: "center" }}>
            <Typography variant="body2" component="span" >
              Temp: {Math.round(item.main.temp)}{" "}<span>&#8451;</span>
            </Typography>
           
          </span>
        </ListItem>
      </div>
    );
  }
  );

  return <List aria-label="DailyForecast data">{result}</List>;
}