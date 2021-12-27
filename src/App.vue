<template>
<!-- <SideBar/> -->
  <div id="nav" class="font-Roboto">
    <router-view class=""/>
  </div>


</template>

<script>
// import Home from '@/views/Home';
import {mapGetters, mapActions } from "vuex";
// import SideBar from '@/components/SideBar.vue'
export default {
  // components:{SideBar},
  computed: {
    ...mapGetters(["sidebarWidth"]),
    ...mapActions(["getAllServices"]),
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
