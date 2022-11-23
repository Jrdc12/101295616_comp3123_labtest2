import React from "react";

function BottomWeather(props) {
	return (
		<div className='bottom'>
			<div className='feels'>
				{props.data.main ? <h3>{props.data.main.feels_like.toFixed()} C°</h3> : null}
				{props.data.main ? <p>Feels like</p> : null}
			</div>
			<div className='humidity'>
				{props.data.main ? <h3>{props.data.main.humidity.toFixed()} %</h3> : null}
				{props.data.main ? <p>Humidity</p> : null}
			</div>
			<div className='wind'>
				{props.data.wind ? <h3>{props.data.wind.speed.toFixed()} km/h</h3> : null}
				{props.data.main ? <p>Wind</p> : null}
			</div>
		</div>
	);
}

export default BottomWeather;
