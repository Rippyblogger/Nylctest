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
		images: [
			{
				id: 1,
				name: "Blackie",
				thumb: require("@/assets/portfolio/transparent.png"),
				description:
					"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin sem metus, vel scelerisque justo viverra vitae. Integer nec nulla nec tortor bibendum hendrerit. Proin sollicitudin lectus eget malesuada malesuada. In porttitor nisl in malesuada rhoncus. Nunc pharetra ligula libero, ut interdum arcu volutpat ac. Cras luctus nisl lobortis odio fringilla, a lacinia erat pharetra. Nunc sed finibus orci. Pellentesque tempor eros tellus. Donec aliquam diam id laoreet rhoncus. Sed eget sapien vitae dui dapibus posuere eu eget turpis. Vestibulum id nulla nec quam tincidunt vulputate sit amet sit amet lacus. Integer accumsan blandit est, id condimentum nisi dignissim ut. Donec ex nisl, luctus non sem ac, commodo luctus magna. Sed sit amet est hendrerit, efficitur diam in, efficitur ligula. Donec risus tortor, pellentesque at egestas quis, rutrum vel nibh. Suspendisse mattis viverra efficitur. Suspendisse tincidunt tellus in sapien consectetur, vel fermentum purus sollicitudin. Donec quis nibh semper, vehicula purus a, dignissim sem. Integer ut varius dui. Vestibulum quis molestie metus, et dapibus nulla. Nulla laoreet id mi at viverra. Maecenas dictum condimentum risus elementum iaculis. Donec varius eros turpis. In venenatis blandit felis, at feugiat elit bibendum sit amet. Maecenas iaculis arcu vitae mauris tempor vehicula. Fusce pharetra turpis nisl, vel suscipit urna lacinia sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dapibus pulvinar enim, ut gravida elit ullamcorper eget. Phasellus sed pharetra neque. Maecenas consequat, libero auctor mollis dictum, nisl tortor elementum nunc, vitae mollis nisl enim ac sapien. Aliquam leo est, mollis id vehicula eu, accumsan consequat turpis. Aliquam a aliquet quam, id fermentum nisi. In vel euismod quam. Vestibulum vitae felis mauris. Aenean quis sem rutrum nunc dignissim pharetra vel sit amet urna. In hac habitasse platea dictumst.",
			},
			{
				id: 2,
				name: "Nakanojo",
				thumb: require("@/assets/portfolio/nakanojo.png"),
				description:
					"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin sem metus, vel scelerisque justo viverra vitae. Integer nec nulla nec tortor bibendum hendrerit. Proin sollicitudin lectus eget malesuada malesuada. In porttitor nisl in malesuada rhoncus. Nunc pharetra ligula libero, ut interdum arcu volutpat ac. Cras luctus nisl lobortis odio fringilla, a lacinia erat pharetra. Nunc sed finibus orci. Pellentesque tempor eros tellus. Donec aliquam diam id laoreet rhoncus. Sed eget sapien vitae dui dapibus posuere eu eget turpis. Vestibulum id nulla nec quam tincidunt vulputate sit amet sit amet lacus. Integer accumsan blandit est, id condimentum nisi dignissim ut. Donec ex nisl, luctus non sem ac, commodo luctus magna. Sed sit amet est hendrerit, efficitur diam in, efficitur ligula. Donec risus tortor, pellentesque at egestas quis, rutrum vel nibh. Suspendisse mattis viverra efficitur. Suspendisse tincidunt tellus in sapien consectetur, vel fermentum purus sollicitudin. Donec quis nibh semper, vehicula purus a, dignissim sem. Integer ut varius dui. Vestibulum quis molestie metus, et dapibus nulla. Nulla laoreet id mi at viverra. Maecenas dictum condimentum risus elementum iaculis. Donec varius eros turpis. In venenatis blandit felis, at feugiat elit bibendum sit amet. Maecenas iaculis arcu vitae mauris tempor vehicula. Fusce pharetra turpis nisl, vel suscipit urna lacinia sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dapibus pulvinar enim, ut gravida elit ullamcorper eget. Phasellus sed pharetra neque. Maecenas consequat, libero auctor mollis dictum, nisl tortor elementum nunc, vitae mollis nisl enim ac sapien. Aliquam leo est, mollis id vehicula eu, accumsan consequat turpis. Aliquam a aliquet quam, id fermentum nisi. In vel euismod quam. Vestibulum vitae felis mauris. Aenean quis sem rutrum nunc dignissim pharetra vel sit amet urna. In hac habitasse platea dictumst.",
			},
			{
				id: 3,
				name: "Ponton",
				thumb: require("@/assets/portfolio/ponton.png"),
				description:
					"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin sem metus, vel scelerisque justo viverra vitae. Integer nec nulla nec tortor bibendum hendrerit. Proin sollicitudin lectus eget malesuada malesuada. In porttitor nisl in malesuada rhoncus. Nunc pharetra ligula libero, ut interdum arcu volutpat ac. Cras luctus nisl lobortis odio fringilla, a lacinia erat pharetra. Nunc sed finibus orci. Pellentesque tempor eros tellus. Donec aliquam diam id laoreet rhoncus. Sed eget sapien vitae dui dapibus posuere eu eget turpis. Vestibulum id nulla nec quam tincidunt vulputate sit amet sit amet lacus. Integer accumsan blandit est, id condimentum nisi dignissim ut. Donec ex nisl, luctus non sem ac, commodo luctus magna. Sed sit amet est hendrerit, efficitur diam in, efficitur ligula. Donec risus tortor, pellentesque at egestas quis, rutrum vel nibh. Suspendisse mattis viverra efficitur. Suspendisse tincidunt tellus in sapien consectetur, vel fermentum purus sollicitudin. Donec quis nibh semper, vehicula purus a, dignissim sem. Integer ut varius dui. Vestibulum quis molestie metus, et dapibus nulla. Nulla laoreet id mi at viverra. Maecenas dictum condimentum risus elementum iaculis. Donec varius eros turpis. In venenatis blandit felis, at feugiat elit bibendum sit amet. Maecenas iaculis arcu vitae mauris tempor vehicula. Fusce pharetra turpis nisl, vel suscipit urna lacinia sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dapibus pulvinar enim, ut gravida elit ullamcorper eget. Phasellus sed pharetra neque. Maecenas consequat, libero auctor mollis dictum, nisl tortor elementum nunc, vitae mollis nisl enim ac sapien. Aliquam leo est, mollis id vehicula eu, accumsan consequat turpis. Aliquam a aliquet quam, id fermentum nisi. In vel euismod quam. Vestibulum vitae felis mauris. Aenean quis sem rutrum nunc dignissim pharetra vel sit amet urna. In hac habitasse platea dictumst.",
			},
			{
				id: 4,
				name: "Uni Remote",
				thumb: require("@/assets/portfolio/remote.png"),
				description:
					"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin sem metus, vel scelerisque justo viverra vitae. Integer nec nulla nec tortor bibendum hendrerit. Proin sollicitudin lectus eget malesuada malesuada. In porttitor nisl in malesuada rhoncus. Nunc pharetra ligula libero, ut interdum arcu volutpat ac. Cras luctus nisl lobortis odio fringilla, a lacinia erat pharetra. Nunc sed finibus orci. Pellentesque tempor eros tellus. Donec aliquam diam id laoreet rhoncus. Sed eget sapien vitae dui dapibus posuere eu eget turpis. Vestibulum id nulla nec quam tincidunt vulputate sit amet sit amet lacus. Integer accumsan blandit est, id condimentum nisi dignissim ut. Donec ex nisl, luctus non sem ac, commodo luctus magna. Sed sit amet est hendrerit, efficitur diam in, efficitur ligula. Donec risus tortor, pellentesque at egestas quis, rutrum vel nibh. Suspendisse mattis viverra efficitur. Suspendisse tincidunt tellus in sapien consectetur, vel fermentum purus sollicitudin. Donec quis nibh semper, vehicula purus a, dignissim sem. Integer ut varius dui. Vestibulum quis molestie metus, et dapibus nulla. Nulla laoreet id mi at viverra. Maecenas dictum condimentum risus elementum iaculis. Donec varius eros turpis. In venenatis blandit felis, at feugiat elit bibendum sit amet. Maecenas iaculis arcu vitae mauris tempor vehicula. Fusce pharetra turpis nisl, vel suscipit urna lacinia sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dapibus pulvinar enim, ut gravida elit ullamcorper eget. Phasellus sed pharetra neque. Maecenas consequat, libero auctor mollis dictum, nisl tortor elementum nunc, vitae mollis nisl enim ac sapien. Aliquam leo est, mollis id vehicula eu, accumsan consequat turpis. Aliquam a aliquet quam, id fermentum nisi. In vel euismod quam. Vestibulum vitae felis mauris. Aenean quis sem rutrum nunc dignissim pharetra vel sit amet urna. In hac habitasse platea dictumst.",
			},
			{
				id: 5,
				name: "Frank 'O' Dowds",
				thumb: require("@/assets/portfolio/frank.png"),
				description:
					"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin sem metus, vel scelerisque justo viverra vitae. Integer nec nulla nec tortor bibendum hendrerit. Proin sollicitudin lectus eget malesuada malesuada. In porttitor nisl in malesuada rhoncus. Nunc pharetra ligula libero, ut interdum arcu volutpat ac. Cras luctus nisl lobortis odio fringilla, a lacinia erat pharetra. Nunc sed finibus orci. Pellentesque tempor eros tellus. Donec aliquam diam id laoreet rhoncus. Sed eget sapien vitae dui dapibus posuere eu eget turpis. Vestibulum id nulla nec quam tincidunt vulputate sit amet sit amet lacus. Integer accumsan blandit est, id condimentum nisi dignissim ut. Donec ex nisl, luctus non sem ac, commodo luctus magna. Sed sit amet est hendrerit, efficitur diam in, efficitur ligula. Donec risus tortor, pellentesque at egestas quis, rutrum vel nibh. Suspendisse mattis viverra efficitur. Suspendisse tincidunt tellus in sapien consectetur, vel fermentum purus sollicitudin. Donec quis nibh semper, vehicula purus a, dignissim sem. Integer ut varius dui. Vestibulum quis molestie metus, et dapibus nulla. Nulla laoreet id mi at viverra. Maecenas dictum condimentum risus elementum iaculis. Donec varius eros turpis. In venenatis blandit felis, at feugiat elit bibendum sit amet. Maecenas iaculis arcu vitae mauris tempor vehicula. Fusce pharetra turpis nisl, vel suscipit urna lacinia sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dapibus pulvinar enim, ut gravida elit ullamcorper eget. Phasellus sed pharetra neque. Maecenas consequat, libero auctor mollis dictum, nisl tortor elementum nunc, vitae mollis nisl enim ac sapien. Aliquam leo est, mollis id vehicula eu, accumsan consequat turpis. Aliquam a aliquet quam, id fermentum nisi. In vel euismod quam. Vestibulum vitae felis mauris. Aenean quis sem rutrum nunc dignissim pharetra vel sit amet urna. In hac habitasse platea dictumst.",
			},
			{
				id: 6,
				name: "Irish Cottage",
				thumb: require("@/assets/portfolio/irish.png"),
				description:
					"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin sem metus, vel scelerisque justo viverra vitae. Integer nec nulla nec tortor bibendum hendrerit. Proin sollicitudin lectus eget malesuada malesuada. In porttitor nisl in malesuada rhoncus. Nunc pharetra ligula libero, ut interdum arcu volutpat ac. Cras luctus nisl lobortis odio fringilla, a lacinia erat pharetra. Nunc sed finibus orci. Pellentesque tempor eros tellus. Donec aliquam diam id laoreet rhoncus. Sed eget sapien vitae dui dapibus posuere eu eget turpis. Vestibulum id nulla nec quam tincidunt vulputate sit amet sit amet lacus. Integer accumsan blandit est, id condimentum nisi dignissim ut. Donec ex nisl, luctus non sem ac, commodo luctus magna. Sed sit amet est hendrerit, efficitur diam in, efficitur ligula. Donec risus tortor, pellentesque at egestas quis, rutrum vel nibh. Suspendisse mattis viverra efficitur. Suspendisse tincidunt tellus in sapien consectetur, vel fermentum purus sollicitudin. Donec quis nibh semper, vehicula purus a, dignissim sem. Integer ut varius dui. Vestibulum quis molestie metus, et dapibus nulla. Nulla laoreet id mi at viverra. Maecenas dictum condimentum risus elementum iaculis. Donec varius eros turpis. In venenatis blandit felis, at feugiat elit bibendum sit amet. Maecenas iaculis arcu vitae mauris tempor vehicula. Fusce pharetra turpis nisl, vel suscipit urna lacinia sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dapibus pulvinar enim, ut gravida elit ullamcorper eget. Phasellus sed pharetra neque. Maecenas consequat, libero auctor mollis dictum, nisl tortor elementum nunc, vitae mollis nisl enim ac sapien. Aliquam leo est, mollis id vehicula eu, accumsan consequat turpis. Aliquam a aliquet quam, id fermentum nisi. In vel euismod quam. Vestibulum vitae felis mauris. Aenean quis sem rutrum nunc dignissim pharetra vel sit amet urna. In hac habitasse platea dictumst.",
			},
		],
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
