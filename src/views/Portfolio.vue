<template>
	<div>
		<SideBar class="text-black" />
		<div
			class="bg-white h-full text-brand-black p-3 grid place-content-center place-items-center"
		>
			<div class="flex justify-center py-3">
				<img
					src="@/assets/portfolio/ellipsis.png"
					alt="Ellipsis"
					class="cursor-pointer"
				/>
			</div>
			<div
				class="grid lg:grid-rows-2 lg:grid-cols-3 gap-y-2 md:gap-4 content-center place-content-center place-items-center"
			>
				<div v-for="(image, index) in images" :key="index">
					<router-link
						:to="{ name: 'PortfolioDetails', params: { id: image.id } }"
						class="cursor-pointer clickable-container"
					>
						<div class="single-news">
							<img
								:src="image.thumb"
								:alt="image.description"
								class="cursor-pointer"
							/>
						</div>
						<div class="overlay text-left p-6">
							<div class="overlay-content font-bold text-base">
								{{ image.name }}
							</div>
							<span>&#9866;</span>
							<h3 class="responsive-title text-xs">{{ image.description }}</h3>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SideBar from "@/components/SideBar.vue";
export default {
	name: "Portfolio",
	data() {
		return {};
	},
	components: { SideBar },
	computed: {
		...mapState({ images: "images" }),
		...mapActions(["getAllPortfolio"]),
	},
	mounted() {
		this.getAllPortfolio;
	},
};
</script>

<style lang="css" scoped>
.clickable-container {
	position: relative;
	color: white;
	display: block;
}

.overlay {
	display: none;
}
.clickable-container:hover .overlay {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #1d1f21;
	width: 100%;
	height: 100%;
	opacity: 0.95;
}

.single-news > img {
	background: #1d1f21;
	display: block;
}
</style>
