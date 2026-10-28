import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';

const EMPTY_MESSAGES = {
  all: 'Seu check-in está vazia. Adicione a sua primeira tarefa acima.',
  pending: 'Nada pendente. Respire fundo, está tudo em dia.',
  done: 'Nenhuma tarefa concluída ainda.',
};

export default function TodoList() {
  const { visibleTodos, filter, toggleTodo, removeTodo } = useTodos();

  if (visibleTodos.length === 0) {
    return <p className="empty">{EMPTY_MESSAGES[filter]}</p>;
  }

  return (
    <ul className="list">
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={removeTodo} />
      ))}
    </ul>
  );
}
