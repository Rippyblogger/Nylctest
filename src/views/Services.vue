<template>
<SideBar class="text-black"/>
	<div
		class="bg-white h-screen  text-bg-black py-16 grid place-items-center font-Roboto"
	>
		<div class="flex flex-row font-normal">
			<div class="w-40"></div>
			<div class="font-bold">
				<h3>Services</h3>
				<span>&#9866;</span>
				<p class="text-sm font-normal w-5/6">
					Services Booreykoo is a branding, web development, design, and
					marketing firm with more than fourteen years of industry experience,
					serving clients worldwide. Welcome to the future of design. Our main
					goal is not only to rank your website higher but also maintain its
					high rank once achieved.
				</p>
			</div>
		</div>

		<div class="flex flex-row mt-10 h-max">
			<div id="yellow" class="bg-brand-yellow w-1/12 flex md:justify-center md:items-center text-center">
				<p class="flip-text  font-bold">Just be yourself!</p>
			</div>

			<div
				class="w-11/12 bg-brand-black flex flex-col md:flex-row text-white justify-evenly p-12 font-normal"
			>
				<ul
					v-for="(servicesText, index) in servicesTexts"
					:key="index"
					class="flex flex-col space-y-6 py-6"
				>
					<div class="space-y-2 px-1 md:px-10 min-h-24">
						<li class="text-lg">{{ servicesText.text1 }}</li>
						<li class="text-xs text-justify">{{ servicesText.subText1 }}</li>
					</div>

					<div class="space-y-2 px-1 md:px-10 min-h-24">
						<li class="text-lg">{{ servicesText.text2 }}</li>
						<li class="text-xs text-justify">{{ servicesText.subText2 }}</li>
					</div>

					<div class="space-y-2 px-1 md:px-10 min-h-24">
						<li class="text-lg">{{ servicesText.text3 }}</li>
						<li class="text-xs text-justify">{{ servicesText.subText3 }}</li>
					</div>
				</ul>
			</div>
		</div>


		<div class="flex justify-center my-8">
			<ContactButton/>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex';
import ContactButton from '../components/ContactButton.vue';
import SideBar from '@/components/SideBar.vue';
export default {
	name: "Services",
	data() {
		return {
			servicesTexts: [
				{
					text1: "Logo and Brand identity pack",
					subText1:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
					text2: "Web design and development",
					subText2:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
					text3: "App design and development",
					subText3:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
				},

				{
					text1: "SEO - Search engine optimization",
					subText1:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
					text2: "Social media management",
					subText2:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
					text3: "PPC",
					subText3:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
				},

				{
					text1: "Content marketing",
					subText1:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
					text2: "CRO - Conversion rate optimization",
					subText2:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
					text3: "Review management",
					subText3:
						" Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ",
				},
			],
		};
	},
	components: {
		ContactButton,
		SideBar
	},
	computed:{
		...mapActions(["getAllServices"])
    },
	mounted(){
		this.getAllServices;
	}
};
</script>

<style lang="css" scoped>
.container {
	display: grid;
	grid-template-columns: 0.5fr 2.5fr 2.5fr 2.5fr;
	grid-template-rows: 1fr;
	gap: 0px 0px;
	grid-auto-flow: row;
	grid-template-areas: ". . . .";
}

.flip-text {
	writing-mode: vertical-rl;
	transform: rotate(180deg);
}
</style>
