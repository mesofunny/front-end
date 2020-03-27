import React, { useState, useContext } from "react";
import menubaremoji from "../assets/emoji.png";

import { JokeContext } from "../utils/store/state";

import "../login.css";

const LoginRegister = props => {
	const { register, userLogin } = useContext(JokeContext);
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

	const signIn = e => {
		e.preventDefault();
		userLogin(input.form.email, input.form.password).then(res => {
			console.log("res", res);
			if (res) {
				props.history.push("/");
			}
		});
	};

	const userRegister = e => {
		e.preventDefault();
		register(input.form);
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
						<label for="email">Email: </label>
						<input
							type="email"
							name="email"
							value={input.form.email}
							placeholder="Email"
							onChange={handleChanges}
						/>
						<label for="password">Password: </label>
						<input
							type="password"
							name="password"
							value={input.form.password}
							placeholder="Password"
							onChange={handleChanges}
						/>
						{props.error ? (
							<p>Password must be 7 characters</p>
						) : null}
						<button onClick={signIn}>Login</button>
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
						<label>First Name: </label>
						<input
							type="text"
							name="firstname"
							value={input.form.firstname}
							placeholder="First Name"
							onChange={handleChanges}
						/>
						<label>Last Name: </label>
						<input
							type="text"
							name="lastname"
							value={input.form.lastname}
							placeholder="Last Name"
							onChange={handleChanges}
						/>
						<label>Email: </label>
						<input
							type="email"
							name="email"
							value={input.form.email}
							placeholder="email"
							onChange={handleChanges}
						/>
						<label>Password: </label>
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

export default LoginRegister;
