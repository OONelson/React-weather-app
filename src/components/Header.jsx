import SearchBar from "./SearchBar";
import React, { useState } from "react";
import { RefreshOutline } from "react-ionicons";
import styles from "./Header.module.css";

function Header({ onSubmit, data, countryName, onClick }) {
	const [showSearch, setShowSearch] = useState(false);

	const [city, setCity] = useState("");
	const HandleSearch = () => {
		setShowSearch(!showSearch);
	};

	const HandleChange = (e) => {
		setCity(e.target.value);
	};

	const HandleSubmit = (e) => {
		e.preventDefault();
		onSubmit(city);
		setShowSearch(false);
	};
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<SearchBar onClick={HandleSearch} />
				<div className={styles.toggleContainer}>
					{showSearch && (
						<form onSubmit={HandleSubmit} className={styles.form}>
							<input
								type="text"
								value={city}
								onChange={HandleChange}
								placeholder="Try Typing New York..."
							/>
						</form>
					)}
					{!showSearch && data && (
						<div className={styles.location}>
							<p>{data.name}</p>
							<span>, {countryName}</span>
						</div>
					)}
				</div>
			</div>
			<RefreshOutline
				onClick={onClick}
				height="32px"
				width="32px"
				className="refresh-icon"
			/>
		</header>
	);
}

export default Header;
