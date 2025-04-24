'use client';

import { useState } from 'react';

export default function MagicLoginPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Sending magic link...');

    try {
      const res = await fetch('http://localhost:5050/api/auth/magic/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message || 'Check your inbox for the link ✨');
    } catch (err) {
      setMessage('❌ Failed to send magic link');
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 max-w-sm w-full">
        <h2 className="text-xl font-bold text-black">Login via Magic Link ✨</h2>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700"
        >
          Send Magic Link
        </button>
        {message && <p className="text-sm text-black">{message}</p>}
      </form>
    </div>
  );
}
