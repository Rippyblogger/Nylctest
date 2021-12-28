<template>
	<div
		v-if="collapsed"
		class="bg-transparent fixed z-10 top-0 right-0 left-auto bottom-0 p-2 flex flex-col sidebar space-y-10"
		:style="{ width: sidebarWidth }"
		data-aos="fade-right"
	>
		<span class="text-3xl" @click="toggleSide">
			<i class="fas fa-bars"></i>
		</span>
	</div>

	<div
		v-else
		class="bg-brand-yellow fixed z-10 top-0 right-0 left-auto bottom-0 p-2 flex flex-col sidebar justify-center space-y-10"
		:style="{ width: sidebarWidth }"
		data-aos="fade-left"
	>
		<span class="flex justify-end pr-2 text-3xl text-black" @click="toggleSide">
			<i class="fas fa-times"></i>
		</span>

		<div class="text-black flex flex-col text-center h-screen">
			<div class="space-y-2">
				<div
					v-for="(men, index) in webMenu.menu_items"
					:key="index"
					class="mt-32"
				>	
				
					<SidebarLink class="w-full" :to="`/${men.url}`" icon="fas fa-home" @click="toggleSide"> {{
						men.name
					}}</SidebarLink>
					
				</div>

				<p class="font-bold">{{ webMenu.menu_text }}</p>
			</div>

			<div class="mt-auto w-16 ml-36 flex pb-20">
				<a href="https://www.facebook.com" class="cursor-pointer">
					<img src="@/assets/icons/facebook.png" alt="facebook"
				/></a>
				<a href="https://www.instagram.com" class="cursor-pointer">
					<img src="@/assets/icons/instagram.png" alt="instagram"
				/></a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SidebarLink from "./SidebarLink.vue";

export default {
	name: "SideBar",
	props:["hover"],
	components: { SidebarLink },
	methods: {
		toggleSide() {
			this.$store.commit("toggleSidebar");
		},
		testing(thi) {
			router.push(thi);
		},
	},
	computed: {
		...mapState(["collapsed", "webMenu"]),
		...mapGetters(["sidebarWidth"]),
	},
	mounted() {
		this.getAllMenu;
	},
};
</script>

<style scoped>
.sidebar {
	transition: 0.3s ease;
}
</style>
