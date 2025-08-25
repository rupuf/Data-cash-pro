import React from "react";

export default function Navbar({ user, setUser }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">DataCash Pro</h1>
      {user && (
        <button onClick={() => setUser(null)} className="bg-red-500 px-2 py-1 rounded">
          Logout
        </button>
      )}
    </nav>
  );
}
