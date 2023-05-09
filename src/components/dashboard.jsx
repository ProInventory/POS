import React, { useState } from "react";

import Navbar from "./common/navbar";
import Cart from "./cart";
import CartStatus from "./cartStatus";
import Actions from "./actions";
import Messagebox from "./common/messagebox";

import "./styles/dashboard.css";

const Dashboard = () => {
	const user = "User 1";

	const [isOpen, setIsOpen] = useState(false);

	const openNotification = (e) => {
		e.preventDefault();
		setIsOpen(true);
	};

	const closeNotification = (e) => {
		e.preventDefault();
		setIsOpen(false);
	};

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
							<Actions onCancel={openNotification} />
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<Messagebox
					message="This is a notification message"
					onCloseNotification={closeNotification}
				/>
			)}
		</React.Fragment>
	);
};

export default Dashboard;
