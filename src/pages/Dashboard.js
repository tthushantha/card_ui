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
    Paper
} from "@mui/material";
import { Dashboard as DashboardIcon } from "@mui/icons-material";

const features = [
    { title: "View All Cards", path: "/cards" },
    { title: "Create Prepaid Card", path: "/create" },
    { title: "Update Stock", path: "/stock" },
    { title: "Reload Stock Update", path: "/reload" }, // Add this route
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
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card elevation={4}>
                            <CardActionArea onClick={() => navigate(feature.path)}>
                                <CardContent sx={{ minHeight: 100, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Typography variant="h6" align="center">
                                        {feature.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
