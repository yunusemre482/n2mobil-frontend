<template>
  <router-link :to="{name: 'Photos', params: { albumId: album.id }}" >
    <div
        class="sm:w-[20rem]  lg:w-[24rem]  p-5 rounded-tl-[12px] border border-gray-light py-5 px-6 rounded-xl gap-8 flex flex-col cursor-pointer">

      <ul class="grid grid-cols-2 grid-rows-2 ">
        <li v-for="photo in photos" :key="photo.id" class="w-full h-full">
          <img :src="photo.url" :alt="photo.title"/>
        </li>
      </ul>
      <h5 class="font-normal text-sm text-gray leading-tight truncate">
        {{ album.title }}
      </h5>
    </div>
  </router-link>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import {IconBuildingSkyscraper, IconMapPinHeart, IconWorldShare} from "@tabler/icons-vue";


export default defineComponent({
  name: 'AlbumListCard',
  components: {IconMapPinHeart, IconBuildingSkyscraper, IconWorldShare},
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
    photos() {
      return this.album?.photos ? this.album.photos.slice(0, 4) : [];
    }
  }
})
</script>


<style scoped>

</style>