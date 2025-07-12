// src/components/CardForm.js
import React, { useState } from "react";
import { createCard } from "../api";
import {
    Button, TextField, Box, Typography
} from "@mui/material";

export default function CardForm() {
    const [form, setForm] = useState({
        cardName: "",
        amount: "",
        buyPrice: "",
        sellPrice: "",
        stock: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCard(form);
        alert("Card Created!");
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 2 }}>
            <Typography variant="h6">Create Prepaid Card</Typography>
            <TextField label="Card Name" name="cardName" onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Amount" name="amount" onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Buy Price" name="buyPrice" onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Sell Price" name="sellPrice" onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Stock" name="stock" onChange={handleChange} fullWidth margin="normal" />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>Submit</Button>
        </Box>
    );
}
