// src/components/ReloadCapitalUpdate.js
import React, { useEffect, useState } from "react";
import { updateReloadCapital, getReloadProviders } from "../api";
import {
    Box, TextField, Button, Typography,
    Select, MenuItem, InputLabel, FormControl
} from "@mui/material";

export default function ReloadCapitalUpdate() {
    const [form, setForm] = useState({
        provider: "",
        amount: "",
        modifiedBy: "admin",
    });

    const [providers, setProviders] = useState([]);

    useEffect(() => {
        getReloadProviders()
            .then((res) => setProviders(res.data))
            .catch((err) => console.error("Failed to load providers:", err));
    }, []);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateReloadCapital(form);
            alert("Reload Capital updated successfully!");
            setForm({ provider: "", amount: "", modifiedBy: "admin" });
        } catch (err) {
            console.error("Update error:", err);
            alert("Failed to update reload capital.");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 3 }}>
            <Typography variant="h6" gutterBottom>
                Update Reload Capital
            </Typography>

            <FormControl fullWidth margin="normal">
                <InputLabel>Select Provider</InputLabel>
                <Select
                    name="provider"
                    value={form.provider}
                    onChange={handleChange}
                    required
                >
                    {providers.map((prov, idx) => (
                        <MenuItem key={idx} value={prov}>
                            {prov}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                fullWidth
                label="Amount to Add"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                margin="normal"
                type="number"
                required
            />

            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                Update
            </Button>
        </Box>
    );
}
