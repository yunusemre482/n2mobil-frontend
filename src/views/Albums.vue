<template>
  <div class="flex w-full max-h-min flex-col p-5 overflow-hidden bg-inherit  gap-10">
    <go-home text="Go Home" />
    <div class="container mx-auto overflow-hidden">
      <AlbumList :albums="albums"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import GoHome from "@/components/GoBack.vue";
import {mapGetters} from "vuex";
import store from "@/store";
import {FETCH_ALBUMS} from "@/store/actions.ts";
import AlbumList from "@/components/album/AlbumList.vue";



export default defineComponent({
  name: "Albums",
  components: {
    AlbumList,
    GoHome,
  },
  computed: {
    ...mapGetters({
      albums: "albums",
    }),
  },
  beforeRouteEnter(to, _, next) {
    const userId = to.params.userId;
    // ...
    Promise.all([store.dispatch(`${FETCH_ALBUMS}`, {userId: userId})]).then(() => {
      next();
    });
  },
  methods: {
    fetchAlbums() {
      const userId = this.$route.params.userId;

      store.dispatch(FETCH_ALBUMS, {userId: userId});
    },
  },
  created() {
    this.fetchAlbums();
  },
});

</script>

<style></style>
