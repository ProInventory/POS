import React from "react";
import styled from "styled-components";

import CheckoutActions from "./dashboard/checkoutActions";
import NavBar from "./navBar";

const DashboardStyle = styled.div`
	.App {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 5%;
		display: flex;
		z-index: 1;
	}

	.main-content {
		flex: 1;
		padding: 1rem;
	}

	.checkout-actions {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 12%;
		display: flex;
		padding: 1rem;
		z-index: 1;
	}
`;

const Dashboard = () => {
	return (
		<React.Fragment>
			<DashboardStyle>
				<div className="App">
					<div className="navbar">
						<NavBar />
					</div>
					<div className="main-content">
						{/* your other components here */}
					</div>
					<div className="checkout-actions">
						<CheckoutActions />
					</div>
				</div>
			</DashboardStyle>
		</React.Fragment>
	);
};

export default Dashboard;
