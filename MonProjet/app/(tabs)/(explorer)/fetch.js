import { useEffect, useState } from 'react';

export async function fetchLogements() {
  try {
    const res = await fetch(
      "https://gist.githubusercontent.com/Fabsforce/a76097aa83d4f5d1b3c5c9868e2d51d3/raw/25d6501b6a6969268b47b489b32629f2d0eb223d/logements.json"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Erreur fetch:', error);
    return [];
  }
}

export function useLogements() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await fetchLogements();
      setLogements(data);
      setLoading(false);
    }
    loadData();
  }, []);

  return { logements, loading };
}