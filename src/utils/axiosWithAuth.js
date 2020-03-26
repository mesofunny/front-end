import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: "https://DadJokes.herokuapp.com",
	});
};

export const call = () => {
	return axios.create({ baseURL: "https://DadJokes.herokuapp.com" });
};
