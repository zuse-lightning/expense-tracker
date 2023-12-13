import React from "react";
import Transaction from "./Transaction";

export default function TransactionList({ transactions }) {
    return (
        <section>
            <h2>Transactions</h2>
            <ul className="new-transactions-section">
                {transactions.map((t) => (
                    <Transaction transaction={t} key={t.id} />
                ))}
            </ul>
        </section>
    );
}