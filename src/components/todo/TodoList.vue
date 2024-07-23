<template>
    <ul class="divide-y divide-gray-200 px-4">
        <li v-for="todo in todos" :key="todo.id">
            <TodoListItem :todo="todo"/>
        </li>
    </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Todo} from "@/types/todo.types";
import TodoListItem from "@/components/todo/TodoListItem.vue";
import UserCard from "@/components/user/UserCard.vue";

export default defineComponent({
    name: "TodoList",
    components: {UserCard, TodoListItem},
    props: {
        todos: {
            type: Array as () => Array<Todo>,
            required: true,
        },
    },
});
</script>

<style></style>
