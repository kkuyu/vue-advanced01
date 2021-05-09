import Vue from "vue";
import VueRouter from "vue-router";

import NewsView from "../views/NewsView";
import JobsView from "../views/JobsView";
import AskView from "../views/AskView";

Vue.use(VueRouter);

export const router = new VueRouter({
	routes: [
		{ path: "/news", component: NewsView },
		{ path: "/jobs", component: JobsView },
		{ path: "/ask", component: AskView },
	],
});
