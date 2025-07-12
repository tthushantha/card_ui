// src/components/Layout.js
import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import InventoryIcon from "@mui/icons-material/Inventory";
import UpdateIcon from "@mui/icons-material/Update";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "View All Cards", icon: <CreditCardIcon />, path: "/cards" },
  { text: "Create Prepaid Card", icon: <AddCardIcon />, path: "/create" },
  { text: "Update Stock", icon: <InventoryIcon />, path: "/stock" },
  { text: "Reload Stock Update", icon: <UpdateIcon />, path: "/reload/update" },
  { text: "Create Reload Capital", icon: <MonetizationOnIcon />, path: "/reload/create" },
  { text: "Check Threshold", icon: <SearchIcon />, path: "/reload/check" },
];

export default function Layout() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 72,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 72,
            transition: "width 0.3s",
            overflowX: "hidden",
            backgroundColor: "#1f2937",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 1, justifyContent: open ? "space-between" : "center" }}>
          {open && <Typography variant="h6">Shop Manager</Typography>}
          <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <List>
          {menuItems.map(({ text, icon, path }) => (
            <Tooltip title={!open ? text : ""} placement="right" key={text}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => navigate(path)}
                  selected={location.pathname === path}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "#fff",
                    "&.Mui-selected": {
                      backgroundColor: "#374151",
                      "&:hover": { backgroundColor: "#4b5563" },
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: open ? 2 : "auto", justifyContent: "center" }}>
                    {icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={text} />}
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f9fafb", p: 3, overflowY: "auto" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
