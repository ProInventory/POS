import React from "react";
import "./styles/messagebox.css"; // import your custom css file for styling

function Messagebox(props) {
	const { message, onCloseNotification } = props;

	return (
		<React.Fragment>
			<div className="messagebox-container">
				<div className="messagebox-content">
					{message}

					<div className="messagebox-buttons">
						<button onClick={onCloseNotification}>OK</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Messagebox;
