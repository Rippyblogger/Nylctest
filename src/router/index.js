import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/Portfolio",
		name: "Portfolio",
		component: () =>
			import(/*webpackChunkName: "DestinationDetails" */ "../views/Portfolio"),
	},
	{
		path: "/Services",
		name: "Services",
		component: () =>
			import(/*webpackChunkName: "DestinationDetails" */ "../views/Services"),
	},

	{
		path: "/details/:id",
		name: "PortfolioDetails",
		component: () =>
			import(
				/*webpackChunkName: "DestinationDetails" */ "../views/PortfolioDetails"
			),
	},
	
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	// history: createWebHistory(),
	routes,
});


export default router;
