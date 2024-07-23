<template>
    <div class="flex flex-row gap-5 items-start p-2">
      <img class="w-12 h-12 rounded-full object-cover" src="@/assets/profile.png"/>
      <div class="flex flex-col gap-2">
        <h6 class="text-sm capitalize font-normal font-poppins">{{  comment.name }}</h6>
        <p class="text-xs text-body font-roboto font-normal"> {{  comment.body }}</p>
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default  defineComponent({
  name: "CommentListItem",
  props:{
    comment:{
      type: Object,
      required: true

    }
  }
})
</script>

<style></style>
