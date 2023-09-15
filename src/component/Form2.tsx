// UserForm.tsx
import React, { useState } from "react";
import { Button, TextField, Container, Paper } from "@mui/material";
import { useUserDetailsContext } from "../utils/UserDetailsContext";
import "./customcss.css";
const Form2: React.FC = () => {
  const { setDetails } = useUserDetailsContext();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    address: "",
    desigination: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setDetails(formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <h2>User </h2>

        <TextField
          label="Phone Number"
          name="number"
          className="custom-textfield"
          margin="normal"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Address"
          name="address"
          className="custom-textfield"
          margin="normal"
          value={formData.address}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Desigination"
          name="desigination"
          className="custom-textfield"
          margin="normal"
          value={formData.desigination}
          onChange={handleInputChange}
          fullWidth
        />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Paper>
    </Container>
  );
};

export default Form2;
