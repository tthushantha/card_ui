// src/components/StockUpdate.js
import React, { useEffect, useState } from "react";
import { updateStock, getAllCards } from "../api";
import {
    Box, TextField, Button, Typography,
    MenuItem, Select, FormControl, InputLabel
} from "@mui/material";
import { useParams } from "react-router-dom";

export default function StockUpdate() {
    const { cardId } = useParams(); // get from /stock/:cardId
    const [cards, setCards] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState("");
    const [quantityChange, setQuantityChange] = useState("");

    useEffect(() => {
        getAllCards().then((res) => {
            setCards(res.data);
            if (cardId) {
                setSelectedCardId(cardId);
            }
        });
    }, [cardId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedCardId) {
            alert("Please select a card");
            return;
        }

        try {
            await updateStock(selectedCardId, quantityChange);
            alert("Stock updated successfully!");
            setQuantityChange("");
        } catch (err) {
            console.error("Update failed:", err);
            alert("Failed to update stock");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Update Prepaid Card Stock
            </Typography>

            <FormControl fullWidth margin="normal">
                <InputLabel id="card-select-label">Select Card</InputLabel>
                <Select
                    labelId="card-select-label"
                    value={selectedCardId}
                    onChange={(e) => setSelectedCardId(e.target.value)}
                    label="Select Card"
                >
                    {cards.map((card) => (
                        <MenuItem key={card.id} value={card.id}>
                            {card.cardName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                label="Quantity Change (+ / -)"
                value={quantityChange}
                onChange={(e) => setQuantityChange(e.target.value)}
                fullWidth
                margin="normal"
                type="number"
                required
            />

            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                Update Stock
            </Button>
        </Box>
    );
}
