<template>
<SideBar class=""/>
  <div id="nav" class="h-full" :style="{ width: sidebarWidth }">
    <router-view/>
  </div>
  
  
</template>

<script>
// import Home from '@/views/Home';
import {mapGetters } from "vuex";
import SideBar from '@/components/SideBar.vue'
export default {
  components:{SideBar},
  computed: {
    ...mapGetters(["sidebarWidth"]),
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
