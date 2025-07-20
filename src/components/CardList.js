import React, { useEffect, useState } from "react";
import { getAllCards } from "../api";
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Typography, Button, Dialog, DialogActions,
    DialogTitle, DialogContent, DialogContentText
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CardList() {
    const [cards, setCards] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);
    const navigate = useNavigate();

    const loadCards = () => {
        getAllCards().then((res) => setCards(res.data));
    };

    useEffect(() => {
        loadCards();
    }, []);

    const handleUpdateClick = (id) => {
        navigate(`/stock/${id}`);
    };

    const handleDeleteClick = (card) => {
        setCardToDelete(card);
        setOpenDialog(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_API_BASE_URL}/cards/${cardToDelete.id}?modifiedBy=admin`, {
                stock: 99
            });
            alert(`Card "${cardToDelete.cardName}" marked as deleted (stock = 99)`);
            setOpenDialog(false);
            setCardToDelete(null);
            loadCards();
        } catch (err) {
            console.error("Delete failed:", err);
            alert("Failed to delete card");
        }
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ m: 2 }}>
                    Prepaid Card List
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Card Name</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Buy Price</TableCell>
                            <TableCell>Sell Price</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell align="center">Actions</TableCell>
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
                                <TableCell align="center">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        onClick={() => handleUpdateClick(card.id)}
                                        sx={{ mr: 1 }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        size="small"
                                        onClick={() => handleDeleteClick(card)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Confirmation Dialog */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to mark "<strong>{cardToDelete?.cardName}</strong>" as deleted? This will set its stock to <strong>99</strong>.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="error">Confirm</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
