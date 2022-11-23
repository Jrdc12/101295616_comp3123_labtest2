import React from "react";

function FiveDayWeather({ data }) {
	return (
		<div className='weather'>
			{/* {data.list ? data.list.map((day, index) => {
                return (
                    <div key={index}>
                        <p>{day.dt_txt}</p>
                        <p>{day.main.temp.toFixed()} C°</p>
                        <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather icon" />
                    </div>
                )
            }) : null} */}
			{data.list
				? data.list.splice(0, 5).map((day, index) => {
						return (
							<div key={index}>
								{/* <p>{day.dt_txt}</p> */}
								<p>{day.main.temp.toFixed()} C°</p>
								<img
									src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
									alt='weather icon'
								/>
                                <p>{day.weather[0].description}</p>
							</div>
						);
				  })
				: null}
		</div>
	);
}

export default FiveDayWeather;
