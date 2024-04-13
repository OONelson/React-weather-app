import React from "react";
import { SearchOutline } from "react-ionicons";
function SearchBar({ onClick }) {
	return (
		<>
			{" "}
			<SearchOutline
				color={"#000"}
				title={"Search"}
				height="32px"
				width="32px"
				onClick={onClick}
			/>
		</>
	);
}

export default SearchBar;
