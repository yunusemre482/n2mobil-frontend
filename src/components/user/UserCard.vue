<template>
    <router-link :to="{ name: 'Todos', params: { userId: user.id } }">
        <div
            class="w-[358.67px] p-5 rounded-tl-[12px] border border-gray-light py-5 px-6 rounded-xl gap-8 flex flex-col hover:shadow-profile cursor-pointer"
        >
            <div class="flex flex-row gap-5 items-center py-1">
                <img
                    class="w-24 h-24 rounded-full object-cover"
                    src="@/assets/profile.png"
                />
                <div>
                    <h2 class="text-lg font-medium">{{ user.name }}</h2>
                    <p class="text-sm text-gray">{{ user.email }}</p>
                    <p class="text-sm text-gray">{{ user.phone }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <div class="flex flex-row gap-3 items-center">
                        <IconMapPinHeart class="w-6 h-6 text-red text-icon" />
                        <h6 class="text-sm text-icon">Location</h6>
                    </div>

                    <div>
                        <span
                            class="text-sm font-light font-poppins text-gray"
                            >{{
                                user.address.street + " " + user.address.suite
                            }}</span
                        >
                        <br />
                        <span
                            class="text-sm font-light font-poppins text-gray"
                            >{{
                                user.address.city + " " + user.address.zipcode
                            }}</span
                        >
                    </div>
                </div>
                <div>
                    <div class="flex flex-row gap-3 items-center">
                        <IconBuildingSkyscraper
                            class="w-6 h-6 text-blue text-icon"
                        />
                        <h6 class="text-sm text-icon">Company</h6>
                    </div>
                    <span class="text-sm font-light text-gray">{{
                        user.company.name
                    }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex flex-row gap-3 items-center">
                        <IconWorldShare class="w-6 h-6 text-icon" />
                        <h6 class="text-sm text-icon">Company</h6>
                    </div>

                    <span class="text-sm font-light text-gray">{{
                        user.website
                    }}</span>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";
import {
    IconMapPinHeart,
    IconBuildingSkyscraper,
    IconWorldShare,
} from "@tabler/icons-vue";
import { User } from "@/types/user.types";
import type { PropType } from "vue";

export default defineComponent({
    name: "UserCard",
    components: {
        IconMapPinHeart,
        IconBuildingSkyscraper,
        IconWorldShare,
    },
    props: {
        user: {
            type: Object as PropType<User>,
            required: true,
        },
    },
    mounted() {
        this.user.email;
        console.log(this.user);
    },
});
</script>

<style></style>
