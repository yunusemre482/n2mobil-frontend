<template>
  <div class="flex w-full max-h-min flex-col p-5 overflow-hidden bg-inherit  gap-10">
    <go-home text="Go Home" />
    <div class="container mx-auto overflow-hidden">
      <PostList :posts="posts"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

import {mapGetters} from "vuex";
import store from "@/store";
import {FETCH_POSTS} from "@/store/actions";
import PostList from "@/components/post/PostList.vue";
import TodoList from "@/components/todo/TodoList.vue";
import GoHome from "@/components/GoBack.vue";

export default defineComponent({
  name: "Posts",
  components: {
    GoHome, TodoList,
    PostList,
  },
  computed: {
    ...mapGetters({
      posts: "posts",
    }),
  },
  beforeRouteEnter(to, from, next) {
    const userId = to.params.userId;
    // ...
    Promise.all([store.dispatch(`${FETCH_POSTS}`, {userId: userId})]).then(() => {
      next();
    });
  },
  methods: {
    fetchPosts() {
      const userId = this.$route.params.userId;

      store.dispatch(FETCH_POSTS, {userId: userId});
    },
  },
  created() {
    this.fetchPosts();

    console.log("posts:", this.posts);
  },
  beforeUnmount() {
    // clear sates


  }
});
</script>

<style></style>
