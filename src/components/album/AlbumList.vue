<template>
  <ul class="container grid grid-cols-1 md:grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-3">
    <li v-for="album in albums" :key="album.id">
      <AlbumListCard :album="album"/>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AlbumListCard from "./AlbumListCard.vue";
import {Album} from "@/types/album.types.ts";


export default defineComponent({
  name: "AlbumList",
  components: {AlbumListCard},
  props: {
    albums: {
      type: Array as () => Array<Album>,
      required: true,
    },
  }
})
</script>

<style scoped>

</style>