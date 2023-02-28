import React, {useEffect} from 'react';
import Header from "../../components/Header";
import {Box} from "@mui/material";
import {useDispatch} from "react-redux";
import store2 from "store2";
import {StorageKey} from "../../consts";
import {setList} from "../../store/userSlice";

const MainLayout = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            if (!store2.get(StorageKey.Users)) {
                const res = await fetch('/mock/users.json');
                const data = await res.json();
                dispatch(setList(data))
            }
        }

        loadData()
    }, []);

    return (
        <Box>
            <Header/>
            <Box>
                { children }
            </Box>
        </Box>
    );
};

export default MainLayout;