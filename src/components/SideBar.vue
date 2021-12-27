<template>
	<div
		v-if="collapsed"
		class="bg-transparent fixed z-10 top-0 right-0 left-auto bottom-0 p-2 flex flex-col sidebar space-y-10"
		:style="{ width: sidebarWidth }"
	>
		<span class="text-3xl" @click="toggleSide">
			<i class="fas fa-bars "></i>
		</span>

	</div>

	<div
		v-else
		class="bg-brand-yellow fixed z-10 top-0 right-0 left-auto bottom-0 p-2 flex flex-col sidebar space-y-10"
		:style="{ width: sidebarWidth }"
		data-aos="fade-left"
	>
		<span class="flex justify-end pr-2 text-3xl text-black" @click="toggleSide">
			<i class="fas fa-times"></i>
		</span>

		<div class="mx-auto text-black flex flex-col h-screen">
			
			<div class="space-y-6">
				<SidebarLink class="" to="/" icon="fas fa-home">Home</SidebarLink>
			<SidebarLink class="" to="/About" icon="fas fa-columns"
				>About</SidebarLink
			>
			<SidebarLink class="" to="/Services" icon="fas fa-chart-bar"
				>Services</SidebarLink
			>
			<SidebarLink class="" to="/Portfolio" icon="fas fa-users"
				>Portfolio</SidebarLink
			>
			<SidebarLink class="" to="/Contact" icon="fas fa-image"
				>Contact</SidebarLink
			>

			<p class="font-bold">Just be yourself!</p>
			</div>


			<div class="mt-auto w-8 ml-5 flex pb-10">
				<img src="@/assets/icons/facebook.png" alt="facebook" >
				<img src="@/assets/icons/instagram.png" alt="instagram" >
			</div>
		</div>
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
