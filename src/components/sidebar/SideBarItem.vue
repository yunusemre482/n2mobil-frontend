<template>
    <li class="nav-item">
        <a
            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            :href="route"
        >
            <i class="fab fa-pinterest text-lg leading-lg opacity-75"></i>
            <span class="ml-2 text-purple">{{ title }}</span>
        </a>
    </li>
</template>

<script setup lang="ts">
interface SideBarItemProps {
    title?: string;
    route?: string;
}

const { title, route }: SideBarItemProps = defineProps();
</script>

<style></style>
