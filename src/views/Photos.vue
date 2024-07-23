<script lang="ts">
import {defineComponent} from 'vue';
import GoHome from "@/components/GoBack.vue";
import {mapGetters} from "vuex";
import store from "@/store";
import {FETCH_PHOTOS} from "@/store/actions.ts";
import PhotoList from "@/components/album/PhotoList.vue";

export default defineComponent({
  name: 'Photos',
  components: {PhotoList, GoHome},
  computed: {
    ...mapGetters({
      photos: "photos",
    }),
  },
  // @ts-ignore
  beforeRouteEnter(to, from, next) {
    const albumId = to.params.albumId;
    // ...
    Promise.all([store.dispatch(`${FETCH_PHOTOS}`, {albumId: albumId})]).then(() => {
      next();
    });
  },
  methods: {
    fetchPhotos() {
      const albumId = this.$route.params.albumId;

      store.dispatch(FETCH_PHOTOS, {albumId: albumId});
    },
  },
  created() {
    this.fetchPhotos();
  },
})
</script>

<template>
  <div class="flex w-full max-h-min flex-col p-5 overflow-hidden bg-inherit  gap-10">
    <go-home text="Go Albums"/>
    <div class="container mx-auto overflow-hidden">
      <PhotoList :photos="photos"/>
    </div>
  </div>
</template>

<style scoped>

</style>