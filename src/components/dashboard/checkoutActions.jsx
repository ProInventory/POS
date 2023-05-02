import React from "react";
import styled from "styled-components";

const CheckoutActionsStyle = styled.div`
	.checkout-actions {
		background-color: #333;
		border-top: 1px solid #ccc;
		justify-content: space-between;
		align-items: center;
	}

	.checkout-actions button {
		font-size: 18px;
		padding: 10px 20px;
		border-radius: 5px;
	}

	.checkout-actions .checkout-btn {
		background-color: #007bff;
		color: #fff;
	}

	.checkout-actions .cancel-btn {
		background-color: #dc3545;
		color: #fff;
	}

	.checkout-actions .print-btn {
		background-color: #28a745;
		color: #fff;
	}
`;

const CheckoutActions = () => {
	const onCheckout = () => {
		console.log("Checkout");
	};

	const onCancel = () => {
		console.log("Cancel");
	};

	const onPrint = () => {
		console.log("Print");
	};

	return (
		<React.Fragment>
			<CheckoutActionsStyle>
				<div className="checkout-actions">
					<button className="checkout-btn" onClick={onCheckout}>
						Checkout
					</button>
					<button className="cancel-btn" onClick={onCancel}>
						Cancel
					</button>
					<button className="print-btn" onClick={onPrint}>
						Print receipt
					</button>
				</div>
			</CheckoutActionsStyle>
		</React.Fragment>
	);
};

export default CheckoutActions;
