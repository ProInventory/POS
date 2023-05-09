import React from "react";

import "./styles/cartStatus.css";

const CartStatus = () => {
	return (
		<React.Fragment>
			<div className="cart-status">
				<table className="cart-status-table">
					<tbody>
						<tr className="cart-status-table-tr">
							<td className="cart-status-table-td">Items: </td>
							<td className="cart-status-table-td">10</td>
							<td className="cart-status-table-td">Discount: </td>
							<td className="cart-status-table-td">$10</td>
						</tr>

						<tr className="cart-status-table-tr">
							<td className="cart-status-table-td">Total: </td>
							<td className="cart-status-table-td">10</td>
							<td className="cart-status-table-td">Actions: </td>
							<td className="cart-status-table-td">
								<button className="cart-status-table-button">
									Clear
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
};

export default CartStatus;
