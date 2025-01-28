    'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('/api/users');
    const users = await res.json();

    const user = users.find((user: any) => user.name === name && user.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Store user details in local storage
      router.push('/dashboard'); // Navigate to the dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 mb-4 border rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 mb-4 border rounded w-64"
      />
      <button
        onClick={handleLogin}
        className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
      >
        Login
      </button>
    </div>

    
  );
}
