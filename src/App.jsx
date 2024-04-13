import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import WeatherDisplay from "./components/WeatherDisplay";
import Header from "./components/Header";

function App() {
	const [weatherData, setWeatherData] = useState(null);
	const [city, setCity] = useState("");
	const [countryName, setCountryName] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);
	// const [forecastData, setForecastData] = useState(null);

	const API_KEY = "3aa53d91914363061683c175a28170b4";
	const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

	useEffect(() => {
		setTimeout(() => {
			const fetchWeather = async () => {
				try {
					if (city) {
						setLoading(true);
						const response = await axios.get(API_URL);
						setWeatherData(response.data);
						setCountryName(response.data.sys.country);

						// const nextThreeDaysForecast = response.list.slice(0, 8 * 3); // Assuming data.list contains forecasts for every 3 hours
						// setForecastData(nextThreeDaysForecast);
						setError(null);
						setLoading(false);
					}
				} catch (error) {
					console.error("Error fetching weather data:", error);
					setError("Weather is not available, try something else");
				}
			};

			fetchWeather();
		}, 2000);
	}, [city, API_URL]);
	const handleSearch = (city) => {
		setCity(city);
	};
	const HandleReset = () => {
		setRefresh(setWeatherData(null));
	};
	return (
		<div className="app">
			<Header
				onClick={HandleReset}
				onSubmit={handleSearch}
				data={weatherData}
				countryName={countryName}
			/>
			{loading && (
				<div className="results">
					<div>
						<SpinnerCircular
							className="spinner"
							size={70}
							color="#1a1a2d"
							secondaryColor="#fff"
						/>
					</div>
					<div>{error && <p>{error}</p>}</div>
				</div>
			)}
			{/* {weatherData && ( */}
			<WeatherDisplay
				error={error}
				countryName={countryName}
				data={weatherData}
				loading={loading}
				// forecastData={forecastData}
			/>
			{/* )} */}
		</div>
	);
}

export default App;
