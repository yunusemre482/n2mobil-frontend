<template>
  <div class="flex flex-col gap-3 px-4 py-5">
    <span class="text-lg font-poppins capitalize">{{ post.title }}</span>
    <p class="text-sm text-gray-2 text-wrap max-w-lg w-1/2">{{ post.body }}</p>
    <div class="flex w-full px-10 justify-end">
      <button class="flex flex-row items-center gap-4" @click="openPostDetailModal">
        <span class="text-sm font-normal text-black-title"> See More </span>
        <IconSquareRoundedArrowRight :size="24" class="text-icon" />
      </button>
    </div>
    <PostDetailModal :open="isModalOpen" :close="handleClose" :post="post"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PostDetailModal from "./PostDetailModal.vue";
import {IconSquareRoundedArrowRight} from "@tabler/icons-vue";

export default defineComponent({
  name: "PostListItem",
  components:{
    PostDetailModal,
    IconSquareRoundedArrowRight
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods:{
    openPostDetailModal(){
      this.isModalOpen = true;
    },
    handleClose(){
      this.isModalOpen = false;
    }
  },


});
</script>

<style></style>
