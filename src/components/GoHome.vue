<template>
    <router-link to="/">
        <div class="flex flex-row items-center w-full h-full gap-4 mr-auto">
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 10.6667L10.6667 16M10.6667 16L16 21.3333M10.6667 16H21.3333"
                    stroke="#26303E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M16 4C25.6 4 28 6.4 28 16C28 25.6 25.6 28 16 28C6.4 28 4 25.6 4 16C4 6.4 6.4 4 16 4Z"
                    stroke="#26303E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <a class="font-bold text-xl">Go Home</a>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconSquareRoundedArrowLeft } from "@tabler/icons-vue";

defineComponent({
    name: "GoHome",
    components: {
        IconSquareRoundedArrowLeft,
    },
});
</script>

<style></style>
