<template>
	<div
		class="text-white bg-brand-yellow float-left fixed z-10 top-0 right-0 left-0 bottom-0 p-2 flex flex-col sidebar"
		:style="{ width: sidebarWidth }"
	>
		<span class="" @click="toggleSide">
            <i class="fas fa-bars"></i>
        </span>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
	name: "SideBar",
	methods: {
		toggleSide() {
			this.$store.commit("toggleSidebar");
		},
	},
	computed: {
        ...mapState(["collapsed"]),
        ...mapGetters(["sidebarWidth"])
    }
};
</script>

<style scoped>
.sidebar {
	transition: 0.3s ease;
}
</style>
