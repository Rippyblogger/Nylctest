<template>
	<div>
		<router-link
			:to="to"
			class="flex shrink-0 border-none items-center cursor-pointer relative font-normal text-xl select-none text-center border  text-brand-white hover:text-white active:bg-brand-black active:text-white no-underline"
			:class="{ active: isActive }"
		>
			<!-- <i class="flex shrink-0 w-8 mr-4" :class="icon"></i> -->
			<transition name="fade">
				<span v-if="!collapsed">
					<slot/>
				</span>
			</transition>
		</router-link>
	</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { mapState, useStore  } from "vuex";

export default {
	name: "SidebarLink",
	computed: {
		...mapState(["collapsed"]),
	},
	props: {
		to: { type: String, required: true },
		icon: { type: String, required: true },
	},
	setup(props) {
		const store = useStore();
		const route = useRoute();
		const isActive = computed(() => route.path === props.to);
		return { isActive, collapsed: computed(() => store.state.collapsed) }
	},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
