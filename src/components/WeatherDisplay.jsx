import Welcome from "./Welcome";
import { AirplaneOutline, WaterOutline } from "react-ionicons";
import styles from "./WeatherDisplay.module.css";

function WeatherDisplay({ data, error, forecastData }) {
	return (
		<div className="weather-display">
			{/* {error && <p>{error}</p>} */}
			{!error && !data && <Welcome />}
			{!error && data && (
				<div className={styles.details}>
					<div className={styles.maindetails}>
						<h3>{data.main.temp}°C</h3>
						<span> {data.weather[0].description}</span>
					</div>
					<div className={styles.stats}>
						<div className={styles.humidity}>
							<WaterOutline color="#1a1a2d" height="50px" width="50px" />

							<p>{data.main.humidity} %</p>
						</div>
						<div className={styles.wind}>
							<AirplaneOutline color="#1a1a2d" height="50px" width="50px" />{" "}
							<p> {data.wind.speed} m/s</p>
						</div>
					</div>
				</div>
			)}
			{/* {forecastData && (
				<div className={styles.weatherdays}>
					{forecastData.map((data, index) => (
						<div key={index}>
							<h3>{data.dt_txt}</h3>
							<p>Temperature: {data.main.temp}°C</p>
							<p>Weather: {data.weather[0].description}</p>
						</div>
					))}
				</div>
			)} */}
		</div>
	);
}

export default WeatherDisplay;
