<template>
    <div class=" px-2 md:px-32 py-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 place-items-center h-screen">
        <div class="order-2 lg:order-1">
            <h1 class="font-bold text-xl">{{details.headerOne}}</h1>
            <p class="font-bold text-xl">-</p>
            <p class="text-justify ">
                {{details.text}}
            </p>
        </div>
        <div class="order-1 lg:order-2">
            <img :src="require(`@/assets/portfolio/${details.insideSrc1}`)" :alt="details.insideSrc1">
        </div>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data(){
        return{
            portfolioId:this.$route.params.id,
            
        }
    },
    computed:{
        ...mapState(["images"]),
        details(){
            return this.images.find(
                image => image.alt == this.portfolioId
            )
        }
    }
}
</script>

<style scoped>

</style>