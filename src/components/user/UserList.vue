<template>
    <ul
        class="container mx-auto lg:gap-10 flex-wrap flex md:gap-4 sm:gap-5 items-center justify-start"
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
