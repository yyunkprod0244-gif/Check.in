import { memo, useState } from 'react';

const LEAVE_DURATION = 220; // ms — igual à animação "leave" no CSS

function TodoItem({ todo, onToggle, onRemove }) {
  const [leaving, setLeaving] = useState(false);

  // Validação do memoization: no console, você verá apenas o item alterado renderizar.
  if (import.meta.env.DEV) {
    console.log('[render] TodoItem:', todo.text);
  }

  function handleRemove() {
    setLeaving(true);
    setTimeout(() => onRemove(todo.id), LEAVE_DURATION);
  }

  return (
    <li className={`item ${todo.done ? 'is-done' : ''} ${leaving ? 'is-leaving' : ''}`}>
      <button
        type="button"
        className="item__check"
        onClick={() => onToggle(todo.id)}
        aria-pressed={todo.done}
        aria-label={todo.done ? 'Marcar como pendente' : 'Marcar como concluída'}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </button>

      <span className="item__text">{todo.text}</span>

      <button
        type="button"
        className="item__remove"
        onClick={handleRemove}
        aria-label={`Remover tarefa: ${todo.text}`}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </li>
  );
}

// React.memo: só re-renderiza se todo, onToggle ou onRemove mudarem.
export default memo(TodoItem);
