<template>
    <router-link to="/">
        <div class="flex flex-row items-center w-full h-full gap-4 mr-auto">

          <IconSquareRoundedArrowLeft class="text-icon" :size="32" stroke-width="2" />
            <a class="font-bold text-xl">Go Home</a>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {IconSquareRoundedArrowLeft} from "@tabler/icons-vue";

export default defineComponent({
  name: "GoHome",
  components: {
    IconSquareRoundedArrowLeft,
  },
})



</script>

<style></style>
