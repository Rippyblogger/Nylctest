import { createStore } from "vuex";

export default createStore({
	state: {
		collapsed: true,
		sidebar_width: "250",
		sidebar_width_collapsed: 58,
		sidebarWidth: "",
		images: [
			{
				id: 0,
				alt: "transparent-black",
				src: "transparent.png",
				text: "Logo design and brand identity pack. Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit es.Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit es.Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit es.Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit es.Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit es.Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit es. Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit es.Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit es.Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit es. Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratinim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit es.",
				insideSrc1: "Kozara.png",
				headerOne: "Kozara",
				
			},
			{
				id: 1,
				alt: "nakanojo",
				src: "nakanojo.png",
			},
			{ id: 2, alt: "ponton", src: "ponton.png" },
			{ id: 3, alt: "remote", src: "remote.png" },
			{ id: 4, alt: "frank", src: "frank.png" },
			{
				id: 5,
				alt: "irish-cottage",
				src: "irish.png",
			},
		],
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
