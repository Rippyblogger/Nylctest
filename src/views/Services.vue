<template>
	<div>
		<SideBar class="text-black" />
		<div
			class="bg-white h-screen text-bg-black py-16 grid place-items-center font-Roboto"
		>
			<div class="flex flex-row font-normal">
				<div class="w-40"></div>
				<div class="font-bold">
					<h3>{{ servicesTexts.title }}</h3>
					<span>&#9866;</span>
					<p class="text-sm font-normal w-5/6 text-justify">
						{{ servicesTexts.body }}
					</p>
				</div>
			</div>

			<div class="flex flex-row mt-10 h-max">
				<div
					id="yellow"
					class="bg-brand-yellow w-1/12 flex md:justify-center md:items-center text-center"
				>
					<p class="flip-text font-bold">{{ servicesTexts.sidebar_title }}</p>
				</div>

				<div
					class="w-11/12 bg-brand-black grid md:grid-rows-2 md:grid-cols-3 gap-y-10 text-white justify-evenly p-12 font-normal"
				>
					<ul
						v-for="(servicesText, index) in servicesTexts.items"
						:key="index"
						class=""
					>
						<div class="space-y-2 px-1 md:px-10 min-h-24">
							<li class="text-2xl">{{ servicesText.name }}</li>
							<li class="text-xs text-justify">{{ servicesText.body }}</li>
						</div>
					</ul>
				</div>
			</div>

			<div class="flex justify-center my-8 py-8">
				<ContactButton />
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ContactButton from "../components/ContactButton.vue";
import SideBar from "@/components/SideBar.vue";
export default {
	name: "Services",
	data() {
		return {
			servicesTexts: {
    "title": "Services",
    "body": "Booreykoo is a branding, web development, design, and marketing firm with more than fourteen years of industry experience, serving clients worldwide. Welcome to the future of design. Our main goal is not only to rank your website but also maintain its high rank once achieved",
    "sidebar_title": "just be yourself!",
    "items": [{
            "id": 1,
            "name": "Logo and Brand Identity pack",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        },
        {
            "id": 2,
            "name": "Mobile & Web development",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        },
        {
            "id": 3,
            "name": "App design and development",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        },
        {
            "id": 4,
            "name": "SEO- Search engine optimization",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        },
        {
            "id": 5,
            "name": "Social media management",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        },
        {
            "id": 6,
            "name": "PPC",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        },
        {
            "id": 7,
            "name": "Content marketing",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        },
        {
            "id": 8,
            "name": "CRO - Conversion rate optimization",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        },
        {
            "id": 9,
            "name": "Reveiw management",
            "body": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        }
    ],
	"sidebar_title": "Just be yourself!"
}
		};
	},
	components: {
		ContactButton,
		SideBar,
	},
	computed: {
		...mapState({ userServices: "userServices" }),
		...mapActions(["getAllServices"]),
	},
	mounted() {
		this.getAllServices;
	},
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
