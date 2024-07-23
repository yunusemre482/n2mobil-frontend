<template>
  <ul class="container mx-auto lg:gap-10 flex-wrap flex sm:gap-5 items-center lg:justify-start justify-center">
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