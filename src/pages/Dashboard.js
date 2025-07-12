// src/pages/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    Paper,
} from "@mui/material";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import InventoryIcon from "@mui/icons-material/Inventory";
import UpdateIcon from "@mui/icons-material/Update";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SearchIcon from "@mui/icons-material/Search";

const features = [
    { title: "View All Cards", path: "/cards", icon: <CreditCardIcon fontSize="large" /> },
    { title: "Create Prepaid Card", path: "/create", icon: <AddCardIcon fontSize="large" /> },
    { title: "Update Stock", path: "/stock", icon: <InventoryIcon fontSize="large" /> },
    { title: "Reload Stock Update", path: "/reload/update", icon: <UpdateIcon fontSize="large" /> },
    { title: "Create Reload Capital", path: "/reload/create", icon: <MonetizationOnIcon fontSize="large" /> },
    { title: "Check Threshold", path: "/reload/check", icon: <SearchIcon fontSize="large" /> },
];

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 4 }}>
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h4" component="div" gutterBottom>
                    Prepaid Card Admin Dashboard
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Manage your prepaid cards, stock, and reloads efficiently.
                </Typography>
            </Paper>

            <Grid container spacing={3}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            elevation={4}
                            sx={{
                                transition: "transform 0.2s, box-shadow 0.2s",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardActionArea onClick={() => navigate(feature.path)} sx={{ p: 2 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minHeight: 120,
                                    }}
                                >
                                    <Box sx={{ mb: 1, color: "primary.main" }}>
                                        {feature.icon}
                                    </Box>
                                    <Typography variant="subtitle1" align="center" fontWeight={500}>
                                        {feature.title}
                                    </Typography>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
