<template>
    <div class="flex w-full max-h-min flex-col p-5 overflow-hidden bg-inherit  gap-10">
        <go-home text="Go Home" />
        <div class="container mx-auto overflow-hidden">
          <TodoList :todos="todos"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import GoHome from "@/components/GoBack.vue";
import TodoList from "@/components/todo/TodoList.vue";
import { FETCH_TODOS } from "@/store/actions";
import store from "@/store";
import { mapGetters } from "vuex";


export default defineComponent({
    name: "Todos",
    components: {
        GoHome,
        TodoList,
    },
    computed: {
      todos () {
        return this.$store.getters.todos
      }
    },
    beforeRouteEnter(to, from, next) {
        // ...
      Promise.all([
        store.dispatch(FETCH_TODOS, { userId: to.params.userId}).then(() => {
          next();
        })
      ])

    },
    methods: {
        async fetchTodos() {
            await  store.dispatch(FETCH_TODOS, { userId:this.$route.params.userId });
        },
    },
    async created() {
      await this.fetchTodos()

      console.log("todos:", this.todos);
    },
});
</script>

<style></style>
