import WeatherDisplay from "./WeatherDisplay.jsx";
function Welcome({ location }) {
	return (
		<>
			{location && <WeatherDisplay />}
			{!location && (
				<div className="welcome">
					<p>Welcome to WeatherWise</p>
					<span>Click on the search button on the top left corner.</span>
				</div>
			)}
		</>
	);
}

export default Welcome;
