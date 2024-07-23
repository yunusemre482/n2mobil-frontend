<template>
  <router-link :to="text === 'Go Home' ? '/' : {
    name:'Albums',
    params:{
      userId: userId
    }
  }">
    <div class="flex flex-row items-center w-full h-full gap-4 mr-auto">

      <IconSquareRoundedArrowLeft class="text-icon" :size="32" stroke-width="2"/>
      <a class="font-bold text-xl">{{ text }}</a>
    </div>
  </router-link>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {IconSquareRoundedArrowLeft} from "@tabler/icons-vue";
import store from "@/store";

export default defineComponent({
  name: "GoBack",
  components: {
    IconSquareRoundedArrowLeft,
  },
  computed:{
    userId(){
        return store.getters.user.id
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
  }
})


</script>

<style></style>
