<template>
  <div>
    <h1>Users</h1>
    <p>This is the users page</p>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import store from "@/store";
    import {
        FETCH_USERS,
    } from "@/store/actions";


    export default {
        name: "Users",
        computed: {
            ...mapGetters({
                users: "users",
            }),
        },
        beforeRouteEnter (to, from, next) {
            // ...
            Promise.all([
                store.dispatch(`users/${FETCH_USERS}`),
            ]).then(() => {
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
        },
    };
</script>

<style></style>
