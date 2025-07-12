// src/components/ReloadCapitalForm.js
import React, { useState } from "react";
import { createReloadCapital } from "../api";
import {
    Box, TextField, Button, Typography
} from "@mui/material";

export default function ReloadCapitalForm() {
    const [form, setForm] = useState({
        provider: "",
        totalCapital: "",
        threshold: "",
    });

    const now = new Date().toISOString();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            createdDate: now,
            modifiedDate: now,
            lastUpdated: now,
        };

        try {
            await createReloadCapital(payload);
            alert("Reload Capital created successfully!");
            setForm({ provider: "", totalCapital: "", threshold: "" });
        } catch (err) {
            console.error("Error creating capital:", err);
            alert("Failed to create reload capital.");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 3 }}>
            <Typography variant="h6" gutterBottom>
                Create Reload Capital
            </Typography>
            <TextField fullWidth label="Provider" name="provider" value={form.provider} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Total Capital" name="totalCapital" value={form.totalCapital} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Threshold" name="threshold" value={form.threshold} onChange={handleChange} margin="normal" />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>Create</Button>
        </Box>
    );
}
