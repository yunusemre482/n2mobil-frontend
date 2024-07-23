<template>
    <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-5 sm:grid-cols-1 lg:grid-cols-3"
    >
        <li v-for="user in users" :key="user.id">
            <UserCard :user="user"/>
        </li>
    </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import UserCard from "@/components/user/UserCard.vue";
import {User} from "@/types/user.types";

export default defineComponent({
    name: "UserList",
    components: {
        UserCard,
    },
    props: {
        users: {
            type: Array as () => Array<User>,
            required: true,
        },
    },
});
</script>

<style></style>
