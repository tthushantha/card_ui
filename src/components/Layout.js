// src/components/Layout.js
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const navItems = [
    { label: "Dashboard", path: "/", icon: "🏠" },
    { label: "View All Cards", path: "/cards", icon: "💳" },
    { label: "Create Prepaid Card", path: "/create", icon: "➕" },
    { label: "Update Stock", path: "/stock", icon: "📦" },
    { label: "Eload Stock Update", path: "/reload", icon: "🔄" },
];

export default function Layout() {
    const { pathname } = useLocation();

    return (
        <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
            <nav style={{ width: 240, background: "#1f2937", color: "white", padding: 20 }}>
                <h2 style={{ marginBottom: 30, color: "#fff" }}>📊 Shop Manager</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {navItems.map((item) => (
                        <li key={item.path} style={{ marginBottom: 12 }}>
                            <Link
                                to={item.path}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "10px 15px",
                                    borderRadius: 8,
                                    textDecoration: "none",
                                    backgroundColor: pathname === item.path ? "#374151" : "transparent",
                                    color: "white",
                                    transition: "background 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "#4b5563")}
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background =
                                        pathname === item.path ? "#374151" : "transparent")
                                }
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <main style={{ flexGrow: 1, padding: "24px", backgroundColor: "#f9fafb" }}>
                <Outlet />
            </main>
        </div>
    );
}
