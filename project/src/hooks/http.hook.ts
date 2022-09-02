import { useState, useCallback } from 'react';


export const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const request = useCallback(async (url: string, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
    setLoading(true);
    try {
      const responce = await fetch(url, { method, body, headers });

      if (!responce.ok) {
        throw new Error(`Could not fetch ${url}, status: ${responce.status}`);
      }

      const data = await responce.json();
      setLoading(false);
      return data;
    }
    catch (e) {
      setLoading(true);
      setError(true);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => setError(false), []);

  return { loading, request, error, clearError };
};

