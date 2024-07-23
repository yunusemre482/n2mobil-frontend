<script setup>
import SideBar from "@/components/sidebar/SideBar.vue";
import Layout from "@/layouts/MainLayout.vue";
</script>

<template>
    <div id="app">
        <Layout>
            <router-view />
        </Layout>
    </div>
</template>
