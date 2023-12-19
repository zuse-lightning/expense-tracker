import React from "react";
import { useSelector } from "react-redux";
import { selectFlattenedTransactions } from "./transactionsSlice";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";

const Transactions = () => {
    const transaction = useSelector(selectFlattenedTransactions);
    return (
        <div className="comments-container">
            <TransactionList transactions={transaction} />
            <TransactionForm />
        </div>
    );
};

export default Transactions;