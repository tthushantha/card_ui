// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import StockUpdate from "./components/StockUpdate";
import Dashboard from "./pages/Dashboard";

// Placeholder component for reload update
const ReloadUpdate = () => <h2 style={{ padding: 20 }}>Reload Stock Update Page (Coming Soon)</h2>;

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cards" element={<CardList />} />
                <Route path="/create" element={<CardForm />} />
                <Route path="/stock" element={<StockUpdate />} />
                <Route path="/reload" element={<ReloadUpdate />} />
                <Route path="/stock/:cardId?" element={<StockUpdate />} />
            </Routes>
        </Router>
    );
}
