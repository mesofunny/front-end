import React, { useContext, useState } from "react";
import { Button, Modal, Form, Radio, TextArea, Input } from "semantic-ui-react";

import { JokeContext } from "../utils/store/state";

import "./pages.scss";

const Profile = () => {
	const { users } = useContext(JokeContext);
	const [input, setInput] = useState({
		form: {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			date: "",
		},
	});
	const [open, setOpen] = useState(false);

	console.log("user", users);
	const handleChanges = e => {
		setInput({
			form: {
				...input.form,
				[e.target.name]: e.target.value,
			},
		});
	};
	return (
		<div className="profile">
			<h2>
				Name: {users && users.firstname} {users && users.firstname}
			</h2>
			<p>Email: {users && users.email}</p>
			<p>Bio: {users && users.bio}</p>
			<Modal trigger={<Button>Edit</Button>}>
				<Modal.Header>Profile Edit</Modal.Header>
				<Modal.Content>
					<Form>
						<Form.Group widths="equal">
							<Form.Field
								control={Input}
								label="Name"
								placeholder="Name"
							/>
							<Form.Field
								control={Input}
								label="Date of Birth"
								placeholder="MM/DD/YY"
							/>
							<Form.Field
								control={Input}
								label="Locations"
								placeholder="Locations"
							/>
						</Form.Group>
						<Form.Group inline>
							<Form.Field
								control={Input}
								label="Email"
								placeholder="Email"
							/>
							<label>Gender</label>
							<Form.Field control={Radio} label="M" />
							<Form.Field control={Radio} label="F" />
							<Form.Field control={Radio} label="X" />
						</Form.Group>
						<Form.Field
							control={TextArea}
							label="Bio"
							placeholder="Tell us more about you..."
						/>
						<Form.Group inline>
							<label>Make Profile Public?</label>
							<Form.Field control={Radio} label="Yes." />
							<Form.Field control={Radio} label="No." />
						</Form.Group>
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button color="green">Submit</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};

export default Profile;
