import React from "react";

function TopWeather(props) {
	return (
		<div className='top'>
			<div className='location'>
				<p>{props.data.name}</p>
			</div>
			<div className='temp'>
				{props.data.main ? <h1>{props.data.main.temp.toFixed()} C°</h1> : null}
			</div>
			<div className='description'>
				{props.data.weather ? <h3>{props.data.weather[0].description}</h3> : null}
			</div>
		</div>
	);
}

export default TopWeather;
