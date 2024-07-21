import { createStore, createLogger } from 'vuex'
import VuexPersistence from 'vuex-persist'
import users from './modules/users'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const debug = process.env.NODE_ENV !== 'production'



export default createStore({
    modules: {
        users
    },
    strict: debug,
    plugins: debug ? [createLogger(), vuexLocal.plugin] : [vuexLocal.plugin]
})

