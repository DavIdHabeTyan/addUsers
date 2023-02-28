import UsersList from "../../components/UsersList";
import MainLayout from "../../layouts/MainLayout";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {addUser, deleteUser, setEditCandidate} from "../../store/userSlice";
import {useState} from "react";


const UsersPage = () => {

    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName,setNewLastName] = useState("")
    const dispatch = useDispatch();
    const {
        editCandidate,
        list
    } = useSelector(s => s.user)

    const handleDeleteUser = (user) => {
        dispatch(deleteUser(user));
        // TODO: Check
    }

    const handleOpenEditDialog = (user) => {
        dispatch(setEditCandidate(user));
    }

    const handleCloseDialog = () => {
        dispatch(setEditCandidate(null));
    }

    const handleSubscribeDialog = () => {
        const user = {
            firstName: newFirstName,
            lastName: newLastName,
        }
        dispatch(addUser(user))
        handleCloseDialog()
    }

    return (
        <MainLayout>
            <Dialog open={!!editCandidate} onClose={handleCloseDialog}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="First name"
                        type="email"
                        value={newFirstName}
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewFirstName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Last name"
                        // value={editCandidate?.lastName}
                        value={newLastName}
                        fullWidth
                        variant="standard"
                        onChange={(e)=> setNewLastName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSubscribeDialog}>Subscribe</Button>
                </DialogActions>
            </Dialog>
            <UsersList
                users={list}
                onEdit={handleOpenEditDialog}
                onDelete={handleDeleteUser}
            />
        </MainLayout>
    );
};

export default UsersPage;