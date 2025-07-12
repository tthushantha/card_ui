// src/components/CardList.js
import React, { useEffect, useState } from "react";
import { getAllCards } from "../api";
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Typography
} from "@mui/material";

export default function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getAllCards().then((res) => setCards(res.data));
    }, []);

    return (
        <TableContainer component={Paper}>
            <Typography variant="h6" sx={{ m: 2 }}>Prepaid Card List</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Card Name</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Buy Price</TableCell>
                        <TableCell>Sell Price</TableCell>
                        <TableCell>Stock</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cards.map((card) => (
                        <TableRow key={card.id}>
                            <TableCell>{card.cardName}</TableCell>
                            <TableCell>{card.amount}</TableCell>
                            <TableCell>{card.buyPrice}</TableCell>
                            <TableCell>{card.sellPrice}</TableCell>
                            <TableCell>{card.stock}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
