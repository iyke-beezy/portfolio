import { createSlice, configureStore } from "@reduxjs/toolkit";
const axios = require("axios").default;

const { BACKEND_URL } = process.env;

const sanitySlice = createSlice({
	name: "sanity",
	initialState: {
		token: "",
		userid: "",
		posts: [],
	},
	reducers: {
		login: async (state) => {
			if (state.userid !== "") {
				let { payload } = await axios.post(`${BACKEND_URL}/auth/login`, {
					userid: "userIDasd",
					password: "$ugarP|ums",
				});
				return {
					...state,
					token: payload.token,
					userid: payload.id,
				};
			} else {
				let { payload } = await axios.post(`${BACKEND_URL}/auth/login`, {
					userid: state.userid,
					password: "$ugarP|ums",
				});
				return {
					...state,
					token: payload.token,
					userid: payload.id,
				};
			}
		},
		getPosts: async (state, action) => {},
	},
});

export const { login, getPosts } = sanitySlice.actions;
export default sanitySlice.reducer;
