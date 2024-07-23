import api from "@/config/axios";
import {State, Todo} from "@/types/todo.types";

import {SET_LOADING, SET_ERROR, SET_TODOS, RESET_STATE, SET_TODO} from "../mutation";
import {FETCH_TODO, FETCH_TODOS} from "@/store/actions.ts";



export const getters    = {
    todos: (state: State) => state.todos,
};

export const mutations = {
    [SET_TODOS](state: State, todos: Todo[]) {
        state.todos = todos;
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
export const actions    = {
    async [FETCH_TODOS]({ commit},payload) {

        console.log(payload)

        commit(SET_LOADING, true);
        const response = await api.get(`/users/${payload.userId}/todos`);

        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
            return;
        }

        commit(SET_TODOS, response.data);
        commit(SET_LOADING, false);
    },
    async [FETCH_TODO]({ commit }: any, id: number) {
        commit(SET_LOADING, true);
        const response = await api.get(`/todos/${id}`);

        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
            return;
        }
        commit(SET_TODO, response.data);
        commit(SET_LOADING, false);
    },
    [RESET_STATE]({ commit }: any) {
        commit(RESET_STATE);
    },
};

const initialState: State = {
    todos: [],
    loading: false,
    error: '',
};

export const state = () => ({ ...initialState });

export default {
    state,
    getters,
    mutations,
    actions,
};

