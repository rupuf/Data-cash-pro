import React from "react";

export default function BalanceCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mb-4">
      <h2 className="text-lg font-bold">Balance: ₹{user.balance}</h2>
      <p className="text-sm text-gray-600">Referral Code: {user.referralCode}</p>
    </div>
  );
}
