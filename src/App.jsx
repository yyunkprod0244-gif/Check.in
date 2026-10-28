import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import TiltCard from './components/TiltCard';
import useTheme from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page">
      <div className="page__glow page__glow--one" aria-hidden="true" />
      <div className="page__glow page__glow--two" aria-hidden="true" />

      <TiltCard>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </TiltCard>

      <footer className="footer">© 2026 Douglas Henrique</footer>
    </div>
  );
}
