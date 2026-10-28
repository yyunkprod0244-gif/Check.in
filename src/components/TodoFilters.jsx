import { memo } from 'react';
import { FILTERS, useTodos } from '../context/TodoContext';

function TodoFilters() {
  const { filter, setFilter, counts, clearDone } = useTodos();

  return (
    <div className="filters">
      <div className="filters__tabs" role="tablist" aria-label="Filtrar tarefas">
        {Object.entries(FILTERS).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={`filters__tab ${filter === key ? 'is-active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
            <span className="filters__count">{counts[key]}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="filters__clear"
        onClick={clearDone}
        disabled={counts.done === 0}
      >
        Limpar concluídas
      </button>
    </div>
  );
}

export default memo(TodoFilters);
