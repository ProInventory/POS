import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/actions.css";
import {
	faBan,
	faCartShopping,
	faReceipt,
} from "@fortawesome/free-solid-svg-icons";

const Actions = () => {
	return (
		<React.Fragment>
			<div className="actions">
				<button className="actions-button actions-checkout">
					Checkout
					<FontAwesomeIcon icon={faCartShopping} />
				</button>
				<button className="actions-button actions-print">
					Print Receipt
					<FontAwesomeIcon icon={faReceipt} />
				</button>
				<button className="actions-button actions-cancel">
					Cancel
					<FontAwesomeIcon icon={faBan} />
				</button>
			</div>
		</React.Fragment>
	);
};

export default Actions;
