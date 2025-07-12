// src/components/StockUpdate.js
import React, { useState } from "react";
import { updateStock } from "../api";
import {
    TextField, Button, Box, Typography
} from "@mui/material";

export default function StockUpdate() {
    const [id, setId] = useState("");
    const [qty, setQty] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateStock(id, qty);
        alert("Stock Updated");
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 2 }}>
            <Typography variant="h6">Update Stock</Typography>
            <TextField label="Card ID" value={id} onChange={(e) => setId(e.target.value)} fullWidth margin="normal" />
            <TextField label="Quantity (+/-)" value={qty} onChange={(e) => setQty(e.target.value)} fullWidth margin="normal" />
            <Button variant="outlined" type="submit" sx={{ mt: 2 }}>Update</Button>
        </Box>
    );
}
