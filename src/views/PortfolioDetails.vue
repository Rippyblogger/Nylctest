<template>
		<div class="px-2 md:px-32 py-6">
            <span class="text-2xl cursor-pointer" @click="$router.go(-1)"><i class="fas fa-arrow-left "></i></span>
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-16 py-6 "
			>
				<div
					class="order-2 lg:order-1"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-delay="100"
				>
					<h1 class="font-bold text-xl">{{ details.name }}</h1>
					<span class="font-bold text-xxl">&#9866;</span>
					<p class="text-justify">
						{{ details.body }}
					</p>
				</div>
				<div
					class="order-1 lg:order-2"
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-delay="100"
				>
					<img
						:src="details.thumb"
						:alt="details.name"
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
		...mapState({images: "images"}),
		details() {
			return this.images.find((image) => image.id == this.portfolioId);
		},
	},
	methods:{
		
	}
};
</script>

<style scoped></style>
