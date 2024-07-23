<template>
  <div class="flex flex-col gap-3 px-4 py-5 h-full overflow-hidden border-b border-gray-200 rounded-lg">
    <ul class="grid lg:grid-cols-5 lg:gap-x-5 lg:gap-y-3 md:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-3 grid-cols-1 ">
      <li v-for="photo in photos" :key="photo.id" class="mx-3">
        <img :src="photo.url" alt="image"/>
      </li>
    </ul>

  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import {Photo} from "@/types/album.types.ts";

export default defineComponent({
  name: 'PhotoList',
  components: {},
  props:{
    photos:{
      type: Array as () => Array<Photo>,
    }
  }
})
</script>


<style scoped>

</style>