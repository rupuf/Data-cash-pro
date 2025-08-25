import React from "react";

export default function Transactions({ user }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="text-lg font-bold mb-2">Transactions</h2>
      {user.transactions.length === 0 ? (
        <p className="text-sm text-gray-500">No transactions yet.</p>
      ) : (
        <ul className="space-y-2">
          {user.transactions.map((txn) => (
            <li key={txn.id} className="flex justify-between border-b pb-1">
              <span>{txn.type}</span>
              <span className="font-semibold">+₹{txn.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
