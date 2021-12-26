import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import Services from "../views/Services.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import PortfolioDetails from "../views/PortfolioDetails.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/Portfolio",
		name: "Portfolio",
		component: Portfolio,
	},
	{
		path: "/Services",
		name: "Services",
		component: Services,
	},
	{
		path: "/About",
		name: "About",
		component: About,
	},
	{
		path: "/Contact",
		name: "Contact",
		component: Contact,
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
	routes,
});

export default router;
