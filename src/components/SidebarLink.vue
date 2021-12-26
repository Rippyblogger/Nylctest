<template>
    <div>
        <router-link :to="to" class="flex items-center cursor-pointer relative font-medium select-none m-2 border rounded h-2 text-brand-black hover:text-white active:bg-brand-black active:text-white no-underline" :class="{active: isActive}">
            <i class="icon" :class="icon"></i>
            <span v-if="!collapsed">
                <slot/>
            </span>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import {useRoute} from 'vue-router';
import {mapState} from 'vuex';

export default {
    name: "SidebarLink",
    props: {
        to: {type: String, required: true},
        icon: {type: String, required: true}
    },
    setup(props){
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
    }
}
</script>