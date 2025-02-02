import { State, User } from "@/types/user.types";
import api from "@/config/axios";
import {
    RESET_STATE,
    SET_ERROR,
    SET_LOADING,
    SET_USER,
    SET_USERS,
} from "../mutation";
import { FETCH_USER, FETCH_USERS,SET_FETCHED_USER } from "../actions";

const initialState: State = {
    users: [],
    user: null,
    loading: false,
    error: null,
};

export const state = () => ({ ...initialState });

export const getters = {
    users: (state: State) => state.users,
    user: (state: State) => state.user,
    loading: (state: State) => state.loading,
    error: (state: State) => state.error,
};

export const mutations = {
    [SET_USERS](state: State, users: User[]) {
        state.users = users;
    },
    [SET_USER](state: State, user: User) {
        state.user = user;
    },
    [SET_LOADING](state: State, loading: boolean) {
        state.loading = loading;
    },
    [SET_ERROR](state: State, error: string) {
        state.error = error;
    },
    [RESET_STATE](state: State) {
        Object.assign(state, initialState);
    },
};

export const actions = {
    async [FETCH_USERS]({ commit }: any) {
        commit(SET_LOADING, true);
        const response = await api.get("/users");

        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
            return;
        }

        commit(SET_USERS, response.data);
        commit(SET_LOADING, false);
    },
    async [FETCH_USER]({ commit }: any, id: number) {
        commit(SET_LOADING, true);
        const response = await api.get(`/users/${id}`);

        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
            return;
        }

        commit(SET_USER, response.data);
        commit(SET_LOADING, false);
    },
    [SET_FETCHED_USER]({commit}: any,payload: any) {
        const user = payload.user as User;

        console.log("setting fetched user", user,payload);

        if (user){
            commit(SET_USER, user);
        }

    },
    [RESET_STATE]({ commit }: any) {
        commit(RESET_STATE);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
