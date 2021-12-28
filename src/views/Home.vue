<template>
	<div>
		<SideBar class="text-white" />
		<div class="bg-brand-black h-screen w-screen text-white px-6">
			<div class="flex justify-center items-center h-screen flex-col">
				<img id="anim-1" src="../assets/logo.svg" alt="image-logo" />
				<h3 id="anim-2" class="text-white text-xs my-6 text-center">
					BUREIKOU - [BOO-REY-KOO] JAPANESE 無礼講 <br />
					putting everything aside to be yourself
				</h3>

				<div class="mt-8">
					<button
						id="anim-3"
						class="bg-brand-black border-2 border-brand-yellow hover:bg-brand-yellow hover:text-white px-6 py-2"
					>
						Contact us
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import SideBar from "@/components/SideBar.vue";
export default {
	name: "Home",
	components: { SideBar },
	computed: {
		...mapActions(["getAllMenu"]),
	},
	mounted() {
		this.getAllMenu;
	},
};
</script>

<style lang="css" scoped>
#anim-1 {
	animation: fadeIn 1s ease-in both;
}

#anim-2 {
	animation: fadeIn 2s ease-in both;
}

#anim-3 {
	animation: fadeIn 3s ease-in both;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translate3d(0, -20%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}
</style>
