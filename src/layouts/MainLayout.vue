<template>
    <div class="layout">
        <side-bar />
        <main class="w-[calc(100%-16rem)] ml-64 p-2 max-w-8xl flex justify-center">
            <slot></slot>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/sidebar/SideBar.vue";

export default defineComponent({
    name: "MainLayout",
    components: {
        SideBar,
    },
});
</script>

<style scoped>
.layout {
    display: flex;
}
</style>
