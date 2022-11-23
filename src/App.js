import { useState } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState("");

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=737cee21fba3f46e0586b07bcc255561`;

	const searchLocation = (e) => {
		if (e.key === "Enter") {
			axios.get(url).then((response) => {
				setData(response.data);
				console.log(response.data);
			});
			setLocation("");
		}
	};

	return (
		<div className='app'>
			<div className='search'>
				<input
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					onKeyPress={searchLocation}
					placeholder='Search Location'
					type='text'
				></input>
			</div>
			<div className='container'>
				<div className='top'>
					<div className='location'>
						<p>{data.name}</p>
					</div>
					<div className='temp'>
						{data.main ? <h1>{data.main.temp.toFixed()} C°</h1> : null}
					</div>
					<div className='description'>
						{data.weather ? <h3>{data.weather[0].description}</h3> : null}
					</div>
				</div>

				{data.name !== undefined && (
					<div className='bottom'>
						<div className='feels'>
							{data.main ? <h3>{data.main.feels_like.toFixed()} C°</h3> : null}
							<p>Feels like</p>
						</div>
						<div className='humidity'>
							{data.main ? <h3>{data.main.humidity.toFixed()} %</h3> : null}
							<p>Humidity</p>
						</div>
						<div className='wind'>
							{data.wind ? <h3>{data.wind.speed.toFixed()} km/h</h3> : null}
							<p>Wind</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
