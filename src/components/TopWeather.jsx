import React from "react";

function TopWeather(props) {
	return (
		<div className='top'>
			<div className='location'>
				<p>{props.data.name}</p>
			</div>
			<div className='temp'>
				{props.data.main ? <h1>{props.data.main.temp.toFixed()} C°</h1> : null}
				{props.data.weather ? <h3>{props.data.weather[0].description}</h3> : null}
				{props.data.weather ? <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt='weather icon' /> : null}
				
			</div>
		</div>
	);
}

export default TopWeather;
