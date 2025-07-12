// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import StockUpdate from "./components/StockUpdate";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout"; // We'll create this component
import ReloadUpdate from "./components/ReloadUpdate"; // Move placeholder to its own file

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cards" element={<CardList />} />
                    <Route path="/create" element={<CardForm />} />
                    <Route path="/stock" element={<StockUpdate />} />
                    <Route path="/reload" element={<ReloadUpdate />} />
                </Route>
            </Routes>
        </Router>
    );
}
