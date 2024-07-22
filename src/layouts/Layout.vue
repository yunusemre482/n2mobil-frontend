// create layout for navbar and main section

<template>
    <side-bar />
    <main>
        <slot></slot>
    </main>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
export default {
    components: { SideBar },
};
</script>

<style></style>
