// src/pages/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  Paper,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import InventoryIcon from "@mui/icons-material/Inventory";
import UpdateIcon from "@mui/icons-material/Update";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SearchIcon from "@mui/icons-material/Search";

// Dashboard action cards
const features = [
  { title: "View All Cards", path: "/cards", icon: <CreditCardIcon fontSize="large" /> },
  { title: "Create Prepaid Card", path: "/create", icon: <AddCardIcon fontSize="large" /> },
  { title: "Update Stock", path: "/stock", icon: <InventoryIcon fontSize="large" /> },
  { title: "Reload Stock Update", path: "/reload/update", icon: <UpdateIcon fontSize="large" /> },
  { title: "Create Reload Capital", path: "/reload/create", icon: <MonetizationOnIcon fontSize="large" /> },
  { title: "Check Threshold", path: "/reload/check", icon: <SearchIcon fontSize="large" /> },
];

// Static card stock data
const cardStockData = [
  { name: "Hutch 1000", stock: 40 },
  { name: "Dialog 1000", stock: 47 },
  { name: "Mobitel 100", stock: 222 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      {/* Header */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Prepaid Card Admin Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage your prepaid cards, stock, and reloads efficiently.
        </Typography>
      </Paper>

      {/* Action Cards */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
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

      {/* Stock Chart */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          📊 Today's Card Stock Overview
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cardStockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}
