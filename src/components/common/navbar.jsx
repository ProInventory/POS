import React from "react";

import Clock from "./clock";

import "./styles/navbar.css";

const Navbar = (props) => {
	const { user } = props;

	return (
		<React.Fragment>
			<div className="navbar">
				<div className="navbar-logo-container">
					<img
						src="logo.png"
						alt="logo"
						className="navbar-logo-image"
					/>
					<div className="navbar-logo-text">POS System </div>
				</div>

				<navbar className="navbar-time-container">
					<div className="navbar-time-clock">
						<Clock />
					</div>
				</navbar>

				<div className="navbar-user-container">
					<div className="navbar-user-image-container">
						<img
							src="user.png"
							alt="user"
							className="navbar-user-image"
						/>
					</div>
					<div className="navbar-user-text">{user}</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Navbar;
