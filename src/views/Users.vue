<template>
    <div class="w-full h-full flex flex-col justify-center container p-5">
        <h5 class="mt-5 mb-10 text-xl font-semibold sm:ml-5 lg:ml-2">All Users</h5>
        <UserList :users="users" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import store from "@/store/index";
import { FETCH_USERS } from "@/store/actions";
import UserList from "@/components/user/UserList.vue";

export default defineComponent({
    components: {
        UserList,
    },
    name: "Users",
    computed: {
        ...mapGetters({
            users: "users",
        }),
    },
  // @ts-ignore
    beforeRouteEnter(to, from, next) {
        // ...
        Promise.all([store.dispatch(`${FETCH_USERS}`)]).then(() => {
            next();
        });
    },
    methods: {
        fetchUsers() {
            store.dispatch(FETCH_USERS);
        },
    },
    created() {
        this.fetchUsers();

        console.log("users:", this.users);
    },
});
</script>

<style></style>
