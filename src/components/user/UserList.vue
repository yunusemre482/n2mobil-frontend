<template>
    <ul
        class="container mx-auto lg:gap-10 flex-wrap flex sm:gap-5 items-center lg:justify-start justify-center"
    >
        <li v-for="user in users" :key="user.id">
            <UserCard :user="user" />
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "@/components/user/UserCard.vue";
import { defineProps } from "vue";
import { User } from "@/types/user.types";

const props = defineProps<{
    users: Array<User>;
}>();

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
