import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BalanceCard from "./components/BalanceCard";
import Withdraw from "./components/Withdraw";
import Transactions from "./components/Transactions";
import Auth from "./components/Auth";
import CustomerService from "./components/CustomerService";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div className="max-w-md mx-auto mt-4 p-4">
        {!user ? (
          <Auth setUser={setUser} />
        ) : (
          <>
            <BalanceCard user={user} />
            <Withdraw user={user} setUser={setUser} />
            <Transactions user={user} />
            <CustomerService />
          </>
        )}
      </div>
    </div>
  );
}
