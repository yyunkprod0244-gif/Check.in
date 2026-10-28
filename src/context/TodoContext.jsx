import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoContext = createContext(null);

export const FILTERS = {
  all: 'Todas',
  pending: 'Pendentes',
  done: 'Concluídas',
};

function createId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('pauta:todos', []);
  const [filter, setFilter] = useState('all');

  // Ações com useCallback: a identidade das funções não muda entre renders,
  // o que permite o React.memo do TodoItem funcionar de verdade.
  const addTodo = useCallback(
    (text) => {
      const clean = text.trim();
      if (!clean) return false;
      setTodos((prev) => [{ id: createId(), text: clean, done: false }, ...prev]);
      return true;
    },
    [setTodos]
  );

  const toggleTodo = useCallback(
    (id) => setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))),
    [setTodos]
  );

  const removeTodo = useCallback(
    (id) => setTodos((prev) => prev.filter((t) => t.id !== id)),
    [setTodos]
  );

  const clearDone = useCallback(
    () => setTodos((prev) => prev.filter((t) => !t.done)),
    [setTodos]
  );

  // useMemo: a lista filtrada só é recalculada quando todos ou filter mudam.
  const visibleTodos = useMemo(() => {
    if (filter === 'done') return todos.filter((t) => t.done);
    if (filter === 'pending') return todos.filter((t) => !t.done);
    return todos;
  }, [todos, filter]);

  // useMemo: contadores usados nos filtros e na barra de progresso.
  const counts = useMemo(() => {
    const done = todos.filter((t) => t.done).length;
    return { all: todos.length, done, pending: todos.length - done };
  }, [todos]);

  const value = useMemo(
    () => ({
      todos,
      visibleTodos,
      counts,
      filter,
      setFilter,
      addTodo,
      toggleTodo,
      removeTodo,
      clearDone,
    }),
    [todos, visibleTodos, counts, filter, addTodo, toggleTodo, removeTodo, clearDone]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// Hook de acesso ao contexto, com erro claro se usado fora do Provider.
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos precisa estar dentro de <TodoProvider>');
  }
  return context;
}
