/** @format */

import { useState, useEffect } from "react";
const useInitialState = () => {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => response.json())
			.then((data) => setVideos(data));
	}, []);
	return videos;
};

export default useInitialState;
