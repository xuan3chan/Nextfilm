"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useAccessToken() {
  const [accessToken, setAccessToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    setAccessToken(token);

    if (!token) {
      router.push('/login');
    }
  }, []);

  return accessToken;
}