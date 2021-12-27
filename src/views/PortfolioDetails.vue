<template>
		<div class="px-2 md:px-32 py-6">
            <span class="text-2xl cursor-pointer"><i class="fas fa-arrow-left "></i></span>
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-16 py-6 "
			>
				<div
					class="order-2 lg:order-1"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-delay="100"
				>
					<h1 class="font-bold text-xl">{{ details.headerOne }}</h1>
					<p class="font-bold text-xl">-</p>
					<p class="text-justify">
						{{ details.text }}
					</p>
				</div>
				<div
					class="order-1 lg:order-2"
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-delay="100"
				>
					<img
						:src="require(`@/assets/portfolio/${details.insideSrc1}`)"
						:alt="details.insideSrc1"
					/>
				</div>
			</div>
		</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	data() {
		return {
			portfolioId: this.$route.params.id,
		};
	},
	computed: {
		...mapState(["images"]),
		details() {
			return this.images.find((image) => image.alt == this.portfolioId);
		},
	},
};
</script>

<style scoped></style>
