'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MagicVerifyPage() {
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');

    if (token) {
      localStorage.setItem('token', token);
      alert("✅ Magic login successful!");
      router.push('/');
    } else {
      alert("❌ Invalid magic token");
      router.push('/magic');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-black bg-white">
      Verifying magic link...
    </div>
  );
}
