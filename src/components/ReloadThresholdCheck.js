// src/components/ReloadThresholdCheck.js
import React, { useEffect, useState } from "react";
import { checkReloadThreshold, getReloadProviders } from "../api";
import {
    Box, Button, Typography,
    Select, MenuItem, InputLabel, FormControl
} from "@mui/material";

export default function ReloadThresholdCheck() {
    const [provider, setProvider] = useState("");
    const [providers, setProviders] = useState([]);
    const [result, setResult] = useState(null);

    useEffect(() => {
        getReloadProviders()
            .then((res) => setProviders(res.data))
            .catch((err) => console.error("Failed to load providers:", err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await checkReloadThreshold(provider);
            setResult(res.data);
        } catch (err) {
            console.error("Threshold check failed:", err);
            alert("Failed to check threshold.");
        }
    };

    return (
        <Box sx={{ m: 3 }}>
            <Typography variant="h6" gutterBottom>
                Check Reload Threshold
            </Typography>

            <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Select Provider</InputLabel>
                    <Select
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        required
                    >
                        {providers.map((prov, idx) => (
                            <MenuItem key={idx} value={prov}>
                                {prov}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Check
                </Button>
            </form>

            {result !== null && (
                <Typography sx={{ mt: 3 }} color={result ? "error.main" : "success.main"}>
                    {result ? "⚠️ Threshold exceeded!" : "✅ Capital is above threshold."}
                </Typography>
            )}
        </Box>
    );
}
