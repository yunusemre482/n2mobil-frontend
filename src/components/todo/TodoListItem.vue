<template>
    <li class="py-4">
        <div class="flex items-center">
            <input
                id="todo1"
                name="todo1"
                type="checkbox"
                selected="todo.completed"
                class="form-checkbox h-4 w-4 text-purple rounded-sm border-2 focus:ring-transparent cursor-pointer"
            />
            <label for="todo1" class="ml-3 block text-gray-900">
                <span class="text-sm font-normal font-roboto text-gray-2 checked:bg-purple">{{ todo.title }}</span>
            </label>
        </div>
    </li>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "TodoListItem",
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style></style>
