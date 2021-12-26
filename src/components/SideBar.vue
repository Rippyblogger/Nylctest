<template>
	<div
		class="text-white bg-brand-yellow float-right fixed z-10 top-0 right-0 left-0 bottom-0 p-2 flex flex-col sidebar space-y-10"
		:style="{ width: sidebarWidth }"
	>
		<span class="" @click="toggleSide">
			<i class="fas fa-bars"></i>
		</span>

		<SidebarLink class="" to="/" icon="fas fa-home">Home</SidebarLink>
		<SidebarLink class="" to="/dashboard" icon="fas fa-columns">About</SidebarLink>
		<SidebarLink class="" to="/analytics" icon="fas fa-chart-bar">Services</SidebarLink>
		<SidebarLink class="" to="/friends" icon="fas fa-users">Portfolio</SidebarLink>
		<SidebarLink class="" to="/image" icon="fas fa-image">Contact</SidebarLink>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SidebarLink from "./SidebarLink.vue";

export default {
	name: "SideBar",
	components: { SidebarLink },
	methods: {
		toggleSide() {
			this.$store.commit("toggleSidebar");
		},
	},
	computed: {
		...mapState(["collapsed"]),
		...mapGetters(["sidebarWidth"]),
	},
};
</script>

<style scoped>
.sidebar {
	transition: 0.3s ease;
}
</style>
