<template>
  <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-[999999]" v-if="open">
    <div class="absolute w-full h-full bg-gray-900 opacity-50" ></div>

    <div class="absolute w-[1024px] h-[609px] mx-auto p-[36px_32px] gap-[10px]  rounded-3xl" >
      <div class="container bg-white overflow-hidden md:rounded w-lg">
        <div
            class="px-8 py-4 leading-none flex justify-between items-center font-medium text-sm items-center">
          <h3>{{ post.title }}</h3>
          <div class="text-2xl hover:text-gray-600 cursor-pointer" @click="handleClose">
            <IconSquareRoundedX class="text-icon" :size="24" stroke-width="2" />
          </div>
        </div>

        <div class="max-h-full w-full px-4 py-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {IconSquareRoundedX} from "@tabler/icons-vue";


export default defineComponent({
  name: "PostDetailModal",
  components: {
    IconSquareRoundedX,
  },
  props: {
    open:{
      type: Boolean,
      default: false
    },
    close:{
      type: Function,
      default: null
    },
    post:{
      type:Object,
      required: true,
    },
    width: {
      type: String,
      default: "full",
    },
  },
  methods: {
    handleClose(){
      this.close()
    }
  },
  computed: {
    maxWidth() {
      switch (this.width) {
        case "xs":
          return "max-w-lg";
        case "sm":
          return "max-w-xl";
        case "md":
          return "max-w-2xl";
        case "lg":
          return "max-w-3xl";
        case "full":
          return "max-w-full";
      }
    },
  },
  mounted() {
    const onEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.close();
      }
    };

    document.addEventListener("keydown", onEscape);
  }
})
</script>

<style></style>
