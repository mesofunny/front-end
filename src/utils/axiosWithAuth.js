import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: "https://mesofunny.herokuapp.com/api",
	});
};

export const call = () => {
	return axios.create({ baseURL: "https://mesofunny.herokuapp.com/api" });
};
