<template>
    <ul class="divide-y divide-gray-light px-4 overflow-y-auto overflow-x-hidden gap-5 flex  flex-col py-5">
      <li v-for="comment in comments" :key="comment">
        <CommentListItem :comment="comment"/>
      </li>
    </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CommentListItem from "@/components/post/CommentListItem.vue";
import {mapGetters} from "vuex";
import {FETCH_COMMENTS} from "@/store/actions";
import store from "@/store"

export default defineComponent({
  name: "CommentList",
  components: {
    CommentListItem
  },
  computed: {
    ...mapGetters({
      comments: "comments",
    }),
  },
  props: {
    postId: {
      type: Number,
    }
  },
  methods: {
    fetchComments() {
      store.dispatch(FETCH_COMMENTS, {postId: this.postId});
    },
  },
  created() {
    this.fetchComments();
  },
});
</script>

<style></style>
