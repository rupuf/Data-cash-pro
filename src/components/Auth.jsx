import React, { useState } from "react";

export default function Auth({ setUser }) {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [referral, setReferral] = useState("");

  const handleSubmit = () => {
    let bonus = 0;
    let txns = [];

    if (isSignup && referral) {
      bonus = 20;
      txns.push({ id: Date.now(), type: "Referral Bonus", amount: 20 });
    }

    const newUser = {
      username,
      balance: bonus,
      referralCode: username.toUpperCase() + "123",
      transactions: txns,
    };
    setUser(newUser);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="text-lg font-bold mb-2">{isSignup ? "Sign Up" : "Login"}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border rounded p-2 mb-2"
      />
      {isSignup && (
        <input
          type="text"
          placeholder="Referral Code (optional)"
          value={referral}
          onChange={(e) => setReferral(e.target.value)}
          className="w-full border rounded p-2 mb-2"
        />
      )}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-2 rounded-lg"
      >
        {isSignup ? "Sign Up" : "Login"}
      </button>
      <p
        className="text-sm text-blue-600 mt-2 cursor-pointer"
        onClick={() => setIsSignup(!isSignup)}
      >
        {isSignup ? "Already have an account? Login" : "New user? Sign up"}
      </p>
    </div>
  );
}
