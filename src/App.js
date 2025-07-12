// src/App.js
import React from "react";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import StockUpdate from "./components/StockUpdate";
import { Container } from "@mui/material";

function App() {
  return (
      <Container>
        <CardForm />
        <StockUpdate />
        <CardList />
      </Container>
  );
}

export default App;
