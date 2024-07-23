<template>
  <ul class="divide-y divide-gray-light px-4">
    <li v-for="post in posts" :key="post.id">
      <PostListItem :post="post"/>
    </li>
  </ul>
</template>

<script>
import TodoListItem from "@/components/todo/TodoListItem.vue";
import PostListItem from "@/components/post/PostListItem.vue";

export default {
  components: {PostListItem, TodoListItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style></style>
