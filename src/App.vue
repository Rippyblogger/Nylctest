<template>
  <div id="nav" class="font-Roboto">
    <router-view class=""/>
  </div>


</template>

<script>
import {mapGetters, mapActions } from "vuex";
import SideBar from '@/components/SideBar.vue'
export default {
  computed: {
    ...mapGetters(["sidebarWidth"]),
    ...mapActions(["getAllServices","getAllMenu"]),
  },
  mounted(){
    this.getAllMenu;
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

</style>
