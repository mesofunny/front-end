import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { JokeState } from "./utils/store/state";

import App from "./App";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
	<Router>
		<JokeState>
			<App />
		</JokeState>
	</Router>,
	document.getElementById("root")
);
