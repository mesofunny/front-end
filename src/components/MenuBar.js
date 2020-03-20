import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
import menubaremoji from "../ImgFiles/menubaremoji.PNG";
import { menuBarEmoji, NavBarMenu } from "./StyledWidgets";

const MenuBar = props => {
	const token = localStorage.getItem("token");

	const logout = () => {
		localStorage.removeItem("token");
		props.history.push("/");
	};
	console.log("props", props);
	if (token) {
		return (
			<div style={NavBarMenu}>
				<Menu attached="top">
					<Dropdown item icon="bars" simple>
						<Dropdown.Menu>
							<div>
								<Link to="/">
									<Dropdown.Item className="nav">
										Home
									</Dropdown.Item>
								</Link>
							</div>
							<div>
								<Link to="/contact">
									<Dropdown.Item className="nav">
										Contact Us
									</Dropdown.Item>
								</Link>
							</div>
							<div>
								<Link to="/profile">
									<Dropdown.Item className="nav">
										Profile
									</Dropdown.Item>
								</Link>
							</div>
							<div>
								<Dropdown.Item onClick={logout} className="nav">
									Logout
								</Dropdown.Item>
							</div>
						</Dropdown.Menu>
					</Dropdown>

					<Menu.Menu position="left">
						<img
							src={menubaremoji}
							alt="menuBarEmoji"
							style={menuBarEmoji}
						/>
						<h1>MeSoFunny</h1>
					</Menu.Menu>
				</Menu>
			</div>
		);
	} else {
		return (
			<div>
				<Menu attached="top">
					<Dropdown item icon="bars" simple>
						<Dropdown.Menu>
							<div>
								<Link to="/">
									<Dropdown.Item>Home</Dropdown.Item>
								</Link>
							</div>
							<div>
								<Link to="/user">
									<Dropdown.Item>Login</Dropdown.Item>
								</Link>
							</div>
							<div>
								<Link to="/public-feed">
									<Dropdown.Item>Public Feed</Dropdown.Item>
								</Link>
							</div>
						</Dropdown.Menu>
					</Dropdown>

					<Menu.Menu position="left">
						<img
							src={menubaremoji}
							alt="menuBarEmoji"
							style={menuBarEmoji}
						/>
						<h1>MeSoFunny</h1>
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
};
export default MenuBar;
