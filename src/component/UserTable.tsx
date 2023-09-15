// src/UserTable.tsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { User, useUserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";

const UserTable: React.FC = () => {
  const { users, deleteUser, editUser } = useUserContext();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");

  const openEditDialog = (user: User) => {
    setSelectedUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
    setEditedPhoneNumber(user.phoneNumber);
    setEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditDialogOpen(false);
    setSelectedUser(null);
  };

  const saveEditedUser = () => {
    if (selectedUser) {
      const editedUser: User = {
        ...selectedUser,
        name: editedName,
        email: editedEmail,
        phoneNumber: editedPhoneNumber,
      };
      editUser(editedUser);
      closeEditDialog();
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      borderRadius: 20,
                      backgroundColor: "860ffe",
                      padding: "5px 10px",
                      fontSize: "12px",
                    }}
                    onClick={() => openEditDialog(user)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    style={{
                      borderRadius: 20,
                      backgroundColor: "#ff0f0f",
                      padding: "5px 10px",
                      fontSize: "12px",
                    }}
                    size="small"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button component={Link} to="/">
        Back to Login
      </Button>
      <Dialog open={editDialogOpen} onClose={closeEditDialog}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <TextField
            label="Number"
            variant="outlined"
            fullWidth
            value={editedPhoneNumber}
            onChange={(e) => setEditedPhoneNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={saveEditedUser} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserTable;
