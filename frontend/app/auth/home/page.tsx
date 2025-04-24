'use client';

import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

type JwtPayload = {
  userId: string;
  email?: string;
  iat: number;
  exp: number;
};

export default function HomePage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlToken = url.searchParams.get("token");

    // Save token from URL to localStorage (Google OAuth)
    if (urlToken) {
      localStorage.setItem("token", urlToken);
      // Optional: remove ?token= from URL
      window.history.replaceState({}, "", "/home");
    }

    const token = urlToken || localStorage.getItem("token");
    if (token) {
      try {
        const decoded: JwtPayload = jwt_decode(token);
        console.log("🔑 Decoded token:", decoded);
        setUserEmail(decoded.email || "Authenticated User");
      } catch (err) {
        console.error("❌ Invalid token", err);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {userEmail ? (
        <h1 className="text-2xl font-bold">Welcome, {userEmail}</h1>
      ) : (
        <h1 className="text-xl">Not logged in</h1>
      )}
    </div>
  );
}
