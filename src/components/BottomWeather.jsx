import React from "react";

function BottomWeather(props) {
	return (
		<div className='bottom'>
			<div className='feels'>
				{props.data.main ? <h3>{props.data.main.feels_like.toFixed()} C°</h3> : null}
				<p>Feels like</p>
			</div>
			<div className='humidity'>
				{props.data.main ? <h3>{props.data.main.humidity.toFixed()} %</h3> : null}
				<p>Humidity</p>
			</div>
			<div className='wind'>
				{props.data.wind ? <h3>{props.data.wind.speed.toFixed()} km/h</h3> : null}
				{/* {props.data.weather ? <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt='weather icon' /> : null} */}
				<p>Wind</p>
			</div>
		</div>
	);
}

export default BottomWeather;
