import { createStore, createLogger } from "vuex";
import VuexPersistence from "vuex-persist";
import users from "./modules/users";
import todos from "./modules/todos";
import posts from "./modules/posts";
import albums from "./modules/albums";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

const debug = import.meta.env.NODE_ENV !== "production";

export default createStore({
    modules: {
        users,
        todos,
        posts,
        albums
    },
    strict: debug,
    plugins: debug ? [createLogger(), vuexLocal.plugin] : [vuexLocal.plugin],
});
