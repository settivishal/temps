"use client";

import { useState } from "react";
import Modal from "../ui/Modal";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50 flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">Time Progress 2.0</h1>
      <div className="space-x-4">
        <button
          onClick={() => setShowLogin(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
        <button
          onClick={() => setShowSignup(true)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Sign Up
        </button>
      </div>

      {showLogin && <Modal title="Login" close={() => setShowLogin(false)} />}
      {showSignup && <Modal title="Sign Up" close={() => setShowSignup(false)} />}
    </header>
  );
}
