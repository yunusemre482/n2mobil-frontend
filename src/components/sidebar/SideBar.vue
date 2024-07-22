<template>
    <nav
        class="fixed h-full left-0 top-0 flex justify-start items-center z-[1101] bg-primary max-w-sm w-64 py-8 px-0 border-solid border-r border-border text-primary"
        :class="{ 'bg-primary': !showMenu, 'bg-primary': showMenu }"
    >
        <div
            class="container px-4 mx-auto flex flex-wrap items-center justify-between max-w-sm"
        >
            <div
                class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
            >
                <a
                    class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="#pablo"
                >
                    pink Color
                </a>
                <button
                    class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    @click="toggleNavbar()"
                >
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div
                :class="{ hidden: !showMenu, flex: showMenu }"
                class="lg:flex lg:flex-grow items-center"
            >
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <SideBarItem
                        v-for="route in routes"
                        :key="route.title"
                        :title="route.title"
                        :route="route.route"
                    />
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import SideBarItem from "@/components/sidebar/SideBarItem.vue";
export default {
    components: {
        SideBarItem,
    },
    data() {
        return {
            showMenu: false,
            routes: [
                { title: "Users", route: "users" },
                { title: "Posts", route: "posts" },
                { title: "Albums", route: "albums" }
            ],
        };
    },
    methods: {
        toggleNavbar() {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>

<style></style>
