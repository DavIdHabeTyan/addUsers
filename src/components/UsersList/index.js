import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const UsersList = ({ users , onEdit, onDelete }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First name</TableCell>
                        <TableCell >Last Name</TableCell>
                        <TableCell align="right" >Actions </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.firstName}
                            </TableCell>
                            <TableCell >{user.lastName}</TableCell>
                            <TableCell align="right" >
                                <IconButton onClick={() => onEdit(user)}>
                                    <EditIcon fontSize={"small"} color={"primary"}/>
                                </IconButton>
                                <IconButton onClick={() => onDelete(user)}>
                                    <DeleteIcon fontSize={"small"} color={"error"}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersList;