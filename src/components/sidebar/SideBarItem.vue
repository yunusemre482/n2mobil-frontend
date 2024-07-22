<template>
    <li class="nav-item hover:bg-white">
        <a
            class="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75 justify-start ml-4"
            :href="route"
        >
            <component :is="icon" class="mr-2 w-6 text-[#4F359B]"></component>
            <span class="ml-2 text-purple font-normal text text-lg">{{
                title
            }}</span>
        </a>
    </li>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true,
    },
    icon: {
        type: Object,
        required: true,
    },
});
</script>

<style></style>
