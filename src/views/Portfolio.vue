<template>
	<div class="bg-white h-full  text-brand-black p-3 grid place-content-center place-items-center">
		<div class="flex justify-center py-3">
			<img src="@/assets/portfolio/ellipsis.png" alt="Ellipsis" class="cursor-pointer">
		</div>
		<div class="grid lg:grid-rows-2 lg:grid-cols-3 gap-y-2 md:gap-4 content-center place-content-center place-items-center">
			<div v-for="(image,index) in images" :key="index">
				<router-link :to="{name: 'PortfolioDetails', params: {id:image.alt}}">
					<img :src="require(`@/assets/portfolio/${image.src}`)" :alt="image.alt" class="cursor-pointer">
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	name: "Portfolio",
	data() {
		return {
			
		};
	},
    computed:{
        ...mapState(["images"])
    }
};
</script>

<style lang="css" scoped></style>
