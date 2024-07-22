<template>
    <nav
        class="fixed h-full left-0 top-0 flex justify-start items-center z-[1101] bg-primary max-w-sm w-64 py-8 px-0 border-solid border-r border-border text-primary"
        :class="{ 'bg-primary': !showMenu, 'bg-primary': showMenu }"
    >
        <div
            class="container mx-auto flex flex-wrap items-center justify-between max-w-sm"
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
                class="lg:flex lg:flex-grow items-center w-full bg-inherit gap-2"
            >
                <ul class="flex flex-col list-none w-full bg-none gap-2">
                    <SideBarItem
                        v-for="route in routes"
                        :key="route.title"
                        :title="route.title"
                        :route="route.route"
                        :icon="route.icon"
                    >
                        <template #icon> {{ icon }}</template>
                    </SideBarItem>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import SideBarItem from "@/components/sidebar/SideBarItem.vue";
import {
    IconUsers,
    IconNotebook,
    IconCheckupList,
    IconPhotoHeart,
} from "@tabler/icons-vue";

export default {
    components: {
        SideBarItem,
    },
    data() {
        return {
            showMenu: false,
            routes: [
                { title: "Users", route: "users", icon: IconUsers },
                { title: "Posts", route: "posts", icon: IconNotebook },
                { title: "Albums", route: "albums", icon: IconPhotoHeart },
                { title: "Todos", route: "todos", icon: IconCheckupList },
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
