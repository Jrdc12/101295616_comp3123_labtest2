import { useState } from "react";
import axios from "axios";
import TopWeather from "./components/TopWeather";
import FiveDayWeather from "./components/FiveDayWeather";
import BottomWeather from "./components/BottomWeather";

function App() {
	const [data, setData] = useState({});
  const [fiveDayData, setFiveDayData] = useState({});
	const [location, setLocation] = useState("");

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=737cee21fba3f46e0586b07bcc255561`;
  const fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=737cee21fba3f46e0586b07bcc255561`;

	const searchLocation = (e) => {
		if (e.key === "Enter") {
			axios.get(url).then((response) => {
				setData(response.data);
				console.log(response.data);
			});
			setLocation("");
		}
    if (e.key === "Enter") {
      axios.get(fiveDayUrl).then((response) => {
        setFiveDayData(response.data);
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
				<TopWeather data={data} />
        <FiveDayWeather data={fiveDayData} />
				<BottomWeather data={data} />
			</div>

		</div>
	);
}

export default App;
