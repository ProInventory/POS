import { useState, useEffect } from "react";

import "./styles/clock.css";

const Clock = () => {
	const [time, setTime] = useState(new Date());
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			const newTime = new Date();
			setTime(newTime);
			setDate(newTime);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="clock">
			<div className="clock-time">{time.toLocaleTimeString()}</div>

			<div className="clock-date">{date.toLocaleDateString()}</div>
		</div>
	);
};

export default Clock;
