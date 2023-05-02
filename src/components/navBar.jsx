import React from "react";
import styled from "styled-components";

const NavBarStyle = styled.div`
	.navbar {
		background-color: #333;
		color: #fff;
		justify-content: space-between;
		align-items: center;
		padding: 0 2vw;
	}

	.navbar-brand {
		color: #fff;
		font-size: 1rem;
	}

	.navbar-user {
		font-weight: bold;
	}
`;

const NavBar = () => {
	const user = { name: "User 1" };

	return (
		<React.Fragment>
			<NavBarStyle>
				<nav className="navbar">
					<div className="navbar-brand">Pro Inventory</div>
					<div className="navbar-user">{user.name}</div>
				</nav>
			</NavBarStyle>
		</React.Fragment>
	);
};

export default NavBar;
