<template>
	<div class="bg-white h-full  text-brand-black p-3 grid place-content-center place-items-center">
		<div class="flex justify-center py-3">
			<img src="@/assets/portfolio/ellipsis.png" alt="Ellipsis" class="cursor-pointer">
		</div>
		<div class="grid lg:grid-rows-2 lg:grid-cols-3 gap-y-2 md:gap-4 content-center place-content-center place-items-center">
			<div v-for="(image,index) in images" :key="index">
				<img :src="image.src" :alt="image.alt" class="cursor-pointer">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Portfolio",
	data() {
		return {
			images: [
				{ alt: "transparent-black", src: require("@/assets/portfolio/transparent.png") },
				{ alt: "nakanojo", src: require("@/assets/portfolio/nakanojo.png") },
				{ alt: "ponton", src: require("@/assets/portfolio/ponton.png") },
				{ alt: "remote", src: require("@/assets/portfolio/remote.png") },
				{ alt: "frank", src: require("@/assets/portfolio/frank.png") },
				{ alt: "irish-cottage", src: require("@/assets/portfolio/irish.png") },
			],
		};
	},
};
</script>

<style lang="css" scoped></style>
