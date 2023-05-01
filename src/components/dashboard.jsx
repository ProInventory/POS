import React from "react";
import styled from "styled-components";

const DashboardStyle = styled.div`
	/* CSS */
	h1 {
		color: red;
	}
`;

const Dashboard = () => {
	return (
		<React.Fragment>
			<DashboardStyle>
				<h1>Dashboard</h1>
			</DashboardStyle>
		</React.Fragment>
	);
};

export default Dashboard;
