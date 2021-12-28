import { createStore } from "vuex";
import ContributionServices from "@/services/http-client";

export default createStore({
	state: {
		collapsed: true,
		sidebar_width: "380",
		sidebar_width_collapsed: 58,
		sidebarWidth: "",
		userPortfolio: [],
		webMenu: [],
		userServices: [],
	},
	mutations: {
		toggleSidebar: (state) => {
			state.collapsed = !state.collapsed;
		},
		setPortfolio: (state, userPortfolio) => {
			state.userPortfolio = userPortfolio;
		},
		setMenu: (state, webMenu) => {
			state.webMenu = webMenu;
		},
		setServices: (state, userServices) => {
			state.userServices = userServices;
		},
	},
	actions: {
		async getAllPortfolio({ commit }) {
			await ContributionServices.getPortfolio().then((response) => {
				commit("setPortfolio", response.data.items);
			});
		},
		async getAllMenu({ commit }) {
			await ContributionServices.getMenu().then((response) => {
				commit("setMenu", response.data);
			});
		},
		async getAllServices({ commit }) {
			await ContributionServices.getServices().then((response) => {
				commit("setServices", response.data);
			});
		},
	},
	modules: {},
	getters: {
		sidebarWidth(state) {
			const sidebarWidth = `${
				state.collapsed ? state.sidebar_width_collapsed : state.sidebar_width
			}px`;
			return sidebarWidth;
		},
	},
});
