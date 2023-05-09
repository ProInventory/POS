import React from "react";

import Navbar from "./common/navbar";

import "./styles/dashboard.css";

const Dashboard = () => {
	const user = "User 1";

	return (
		<React.Fragment>
			<div className="homepage">
				<div className="homepage-navbar">
					<Navbar user={user} />
				</div>

				<div className="homepage-content">
					<h1>Dashboard</h1>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
