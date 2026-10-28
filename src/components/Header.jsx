import { useTodos } from '../context/TodoContext';
import ThemeToggle from './ThemeToggle';

export default function Header({ theme, onToggleTheme }) {
  const { counts } = useTodos();
  const percent = counts.all === 0 ? 0 : Math.round((counts.done / counts.all) * 100);

  return (
    <header className="header">
      <div className="header__top">
        <div className="brand">
          <span className="brand__mark" aria-hidden="true" />
          <h1 className="brand__name">Check.in</h1>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      <p className="header__tagline">Suas tarefas, em ordem.</p>

      <div className="progress" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" aria-label="Progresso das tarefas">
        <div className="progress__bar" style={{ width: `${percent}%` }} />
      </div>
      <p className="progress__label">
        {counts.all === 0
          ? 'Nenhuma tarefa ainda'
          : `${counts.done} de ${counts.all} concluídas · ${percent}%`}
      </p>
    </header>
  );
}
