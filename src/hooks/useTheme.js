import { useCallback, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function getSystemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Hook customizado do tema (claro/escuro).
 * Aplica o tema em <html data-theme="..."> e lembra a escolha do usuário.
 */
export default function useTheme() {
  const [theme, setTheme] = useLocalStorage('pauta:theme', getSystemTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
    [setTheme]
  );

  return { theme, toggleTheme };
}
