import { useCallback, useState } from 'react';

/**
 * Hook customizado para controlar um campo de formulário.
 * Retorna o valor, o handler de mudança e uma função para limpar.
 */
export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event) => setValue(event.target.value), []);
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return { value, onChange, reset };
}
