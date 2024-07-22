<template>
    <layout>
        <router-view />
    </layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Layout from "./layouts/Layout.vue";

@Options({
    components: {
        Layout,
    },
})
export default class App extends Vue {}
</script>

<style>
#app,
body {
    background-color: #f7fafc;
    width: 100%;
    height: 100%;
}
</style>
