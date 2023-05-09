import React from "react";

import Navbar from "./common/navbar";
import Cart from "./cart";
import CartStatus from "./cartStatus";
import Actions from "./actions";

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
					<div className="homepage-content-first-line">
						<div className="homepage-content-cart">
							<div className="homepage-content-cart-container">
								<Cart />
							</div>

							<div className="homepage-content-cart-status-container">
								<CartStatus />
							</div>
						</div>

						<div className="homepage-content-inventoty">
							<div className="homepage-content-inventory-container">
								<Cart />
							</div>
						</div>
					</div>

					<div className="homepage-content-second-line">
						<div className="homepage-content-actions">
							<Actions />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
