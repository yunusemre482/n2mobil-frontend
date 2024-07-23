import api from "@/config/axios";
import {Album, Photo, State} from "@/types/album.types";
import {
    RESET_STATE, SET_ALBUM, SET_ALBUM_PHOTOS, SET_ALBUMS, SET_ERROR, SET_LOADING, SET_PHOTOS,
} from "@/store/mutation.ts";
import {FETCH_ALBUM, FETCH_ALBUMS, FETCH_PHOTOS} from "@/store/actions.ts";


export const getters = {
    albums: (state: State) => state.albums,
    album: (state: State) => state.album,
    photos: (state: State) => state.photos
};

export const mutations = {
    [RESET_STATE](state: State) {
        Object.assign(state, initialState);
    },
    [SET_ALBUMS](state: State, albums: Album[]) {
        state.albums = albums;
    },
    [SET_ALBUM](state: State, album: any) {
        state.album = album;
    },
    [SET_LOADING](state: State, loading: boolean) {
        state.loading = loading;
    },
    [SET_ERROR](state: State, error: string) {
        state.error = error;
    },
    [SET_ALBUM_PHOTOS](state: State, payload: { id: number; photos: Photo[] }) {
        const {id, photos} = payload;
        console.log("Setting photos to album", id, photos);

        if (!id || !photos || !photos?.length) {
            return;
        }

        if (!state?.albums) return;


        // update state albums
        state.albums = state.albums.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    photos: photos,
                };
            }
            return item;
        });
    },
    [SET_PHOTOS](state: State, photos: Photo[]) {
        state.photos = photos;
    }
};

export const actions = {
    async [FETCH_ALBUMS]({commit}, payload) {

        commit(SET_LOADING, true);
        const response = await api.get(`/users/${payload.userId}/albums`);

        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
            return;
        }

        const albums = response.data;


        commit(SET_ALBUMS, albums);
        commit(SET_LOADING, false);


        // NOTE : Not correct way but for now there is a not alternative because album does not have any preview image we can optimize if we write own queries
        await Promise.all(
            albums.map(async (album: Album) => {
                const albumResponse = await api.get(`/albums/${album.id}/photos`);
                console.log("albumResponse", albumResponse.data);
                commit(SET_ALBUM_PHOTOS, {id: album.id, photos: albumResponse.data});
            })
        );

    },
    async [FETCH_ALBUM]({commit}: any, id: number) {
        commit(SET_LOADING, true);
        const response = await api.get(`/albums/${id}`);

        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
            return;
        }
        commit(SET_ALBUM, response.data);
        commit(SET_LOADING, false);
    },
    async [FETCH_PHOTOS]({commit}: any, payload) {
        commit(SET_LOADING, true);

        const id = payload.albumId;

        const response = await api.get(`/albums/${id}/photos`);
        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
        }

        commit(SET_PHOTOS, response.data);
        commit(SET_LOADING, false);
    },
    [RESET_STATE]({commit}: any) {
        commit(RESET_STATE);
    },
};

const initialState: State = {
    albums: [],
    photos:[],
    album: null,
    loading: false,
    error: '',
};

export const state = () => ({...initialState});

export default {
    state,
    getters,
    mutations,
    actions,
};

