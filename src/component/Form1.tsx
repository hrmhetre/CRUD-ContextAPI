// src/UserForm.tsx
import React, { useState } from "react";
import { Button, TextField, Stack, Container, Paper } from "@mui/material";
import { useUserContext } from "../utils/UserContext";

const Form1: React.FC = () => {
  const { addUser } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now();
    const newUser = { id, name, email, phoneNumber };
    addUser(newUser);
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <h2>Register Yourself</h2>
          <Stack spacing={4}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              className="custom-textfield"
              margin="normal"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              className="custom-textfield"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Number"
              variant="outlined"
              className="custom-textfield"
              margin="normal"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Add User
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Form1;
