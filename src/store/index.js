import { createStore } from 'vuex'

export default createStore({
	state: {
		collapsed: true,
		sidebar_width: "180",
		sidebar_width_collapsed: 38,
		sidebarWidth: "",
	},
	mutations: {
		toggleSidebar: (state) => {
			state.collapsed = !state.collapsed;
		},
	},
	actions: {},
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
