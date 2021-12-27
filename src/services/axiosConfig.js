import Axios from "axios";

const axiosClient = Axios.create({
	baseURL: "https://api.fake.rest/ca2a6662-22d0-4010-ba08-0440ffe813ab/",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default axiosClient;