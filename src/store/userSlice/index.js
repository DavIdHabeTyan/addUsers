import { createSlice } from '@reduxjs/toolkit'
import store2 from 'store2';
import {StorageKey} from "../../consts";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        editCandidate: null,
        list: store2.get(StorageKey.Users, []),
    },
    reducers: {
        setList: (state, { payload }) => {
            state.list = payload;
        },
        setEditCandidate: (state, { payload }) => {
            state.editCandidate = payload;
        },
        addUser: (state, { payload }) => {
            state.list.push({
                id: Math.random(),
                firstName: payload.firstName,
                lastName: payload.lastName,
            })
            const list = store2.get(StorageKey.Users, []);
            const newList = [...list, payload];
            state.list = newList;
            store2.set(StorageKey.Users, newList);

        },
        updateUser: (state, { payload }) => {
            console.log(payload)

            const list = store2.get(StorageKey.Users, []);
            // TODO: find user to update
            // TODO: list.user = user with new values
            const newList = [...list];
            store2.set(StorageKey.Users, newList);
        },
        deleteUser: (state, { payload }) => {
            console.log(payload)
            const list = store2.get(StorageKey.Users, state.list);
            const newList = [...list].filter(u => u.id !== payload.id);
            state.list = newList;
            store2.set(StorageKey.Users, newList);
        },

    }
})

export const { setList, addUser, updateUser, deleteUser, setEditCandidate } = userSlice.actions

export default userSlice.reducer