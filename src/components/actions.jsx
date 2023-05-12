import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/actions.css";
import {
	faBan,
	faCartShopping,
	faReceipt,
} from "@fortawesome/free-solid-svg-icons";

const Actions = (props) => {
	const { onCancel } = props;

	return (
		<React.Fragment>
			<div className="actions">
				<button className="actions-button">
					<label className="actions-text"> Checkout </label>
				</button>
				<button className="actions-button">
					<label className="actions-text"> Print Receipt </label>
				</button>
				<button
					onClick={onCancel}
					className="cancel-button">
					<label className="actions-text"> Cancel </label>
				</button>
			</div>
		</React.Fragment>
	);
};

export default Actions;
