import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin, register } from "../utils/store/reducers";
import { withRouter } from "react-router-dom";
import "../login.css";
import menubaremoji from "../assets/emoji.png";

const LoginRegister = props => {
	const [input, setInput] = useState({
		form: {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
		},
	});
	const [login, setLogin] = useState(false);

	const toggle = () => {
		setLogin(!login);
	};

	const handleChanges = e => {
		setInput({
			form: {
				...input.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	const userLogin = e => {
		e.preventDefault();
		props.userLogin(input.form.email, input.form.password).then(res => {
			console.log("res", res);
			if (res) {
				props.history.push("/");
			}
		});
	};

	const userRegister = e => {
		e.preventDefault();
		props.register(input.form);
		props.history.push("/jokes");
	};

	if (!login) {
		return (
			<div className="outer-container">
				<div className="Container">
					<div className="Login">
						<a href="#" style={{ textDecoration: "underline" }}>
							Login
						</a>
						<a href="#" onClick={toggle}>
							Register
						</a>
					</div>
					<h1>WELCOME!</h1>
					<img src={menubaremoji} alt="menuBarEmoji" />

					<form>
						<input
							type="email"
							name="email"
							value={input.form.email}
							placeholder="email"
							onChange={handleChanges}
						/>

						<input
							type="password"
							name="password"
							value={input.form.password}
							placeholder="password"
							onChange={handleChanges}
						/>
						{props.error ? (
							<p>Password must be 7 characters</p>
						) : null}
						<button onClick={userLogin}>Login</button>
					</form>
				</div>
			</div>
		);
	} else {
		return (
			<div className="outer-container">
				<div className="Container">
					<div className="Login">
						<a href="#" onClick={toggle}>
							Login
						</a>
						<a href="#" style={{ textDecoration: "underline" }}>
							Register
						</a>
					</div>
					<h1>WELCOME!</h1>
					<img src={menubaremoji} alt="menuBarEmoji" />
					<form>
						<input
							type="text"
							name="firstname"
							value={input.form.firstname}
							placeholder="First Name"
							onChange={handleChanges}
						/>
						<input
							type="text"
							name="lastname"
							value={input.form.lastname}
							placeholder="Last Name"
							onChange={handleChanges}
						/>
						<input
							type="email"
							name="email"
							value={input.form.email}
							placeholder="email"
							onChange={handleChanges}
						/>
						<input
							type="password"
							name="password"
							value={input.form.password}
							placeholder="password"
							onChange={handleChanges}
						/>
						{props.error ? (
							<p>Password must be 7 characters</p>
						) : null}
						<button onClick={userRegister}>Register</button>
					</form>
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => {
	console.log(state);
	return {
		error: state.error,
		isFetching: state.isFetching,
		jokes: state.jokes,
		user: state.user,
	};
};

export default withRouter(
	connect(mapStateToProps, { userLogin, register })(LoginRegister)
);
