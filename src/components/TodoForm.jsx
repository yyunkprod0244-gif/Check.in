import { useRef } from 'react';
import useInput from '../hooks/useInput';
import { useTodos } from '../context/TodoContext';

export default function TodoForm() {
  const { addTodo } = useTodos();
  const input = useInput('');
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (addTodo(input.value)) {
      input.reset();
    }
    inputRef.current?.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="new-todo" className="sr-only">
        Nova tarefa
      </label>
      <input
        id="new-todo"
        ref={inputRef}
        className="form__input"
        type="text"
        placeholder="O que precisa ser feito?"
        autoComplete="off"
        maxLength={120}
        value={input.value}
        onChange={input.onChange}
      />
      <button type="submit" className="form__button" disabled={!input.value.trim()}>
        Adicionar
      </button>
    </form>
  );
}
