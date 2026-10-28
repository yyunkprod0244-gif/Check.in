import { useEffect, useState } from 'react';

/**
 * Hook customizado: funciona como useState, mas guarda o valor no localStorage.
 * O setter retornado é o mesmo do useState, então ele é estável entre renders.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = window.localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* localStorage indisponível (modo privado, cota cheia): ignora */
    }
  }, [key, value]);

  return [value, setValue];
}
