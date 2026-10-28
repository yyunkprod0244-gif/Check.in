# Pauta — todo-react-avancado

Lista de tarefas moderna, minimalista e interativa, feita em React. Permite **adicionar, concluir, remover e filtrar** tarefas (todas, pendentes, concluídas), com **tema claro/escuro** em paleta neutra.

Projeto de prática de recursos avançados do React: estado local, Context API, hooks customizados e memoization.

## Tecnologias

- React 18 (`useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`, `React.memo`)
- Vite 5
- CSS puro (Mobile First, CSS variables para temas)

## Funcionalidades

- Adicionar, concluir e remover tarefas (com animações)
- Filtros: todas, pendentes e concluídas, com contadores
- Barra de progresso das tarefas concluídas
- Botão de tema claro/escuro (lembra a escolha)
- Tarefas salvas no `localStorage`
- Layout responsivo, Mobile First

## Onde cada requisito está

| Requisito | Arquivo |
| --- | --- |
| Estado local (`useState`) | `src/context/TodoContext.jsx`, `src/components/TodoItem.jsx` |
| Context API (`useContext`) | `src/context/TodoContext.jsx` (`TodoProvider` e `useTodos`) |
| Hooks customizados | `src/hooks/useLocalStorage.js`, `useInput.js`, `useTheme.js` |
| Memoization | `useMemo` e `useCallback` no contexto; `React.memo` em `TodoItem`, `TodoFilters` e `ThemeToggle` |

### Como validar o memoization

Rode em modo desenvolvimento, abra o console do navegador (F12) e adicione algumas tarefas. Ao concluir uma tarefa, apenas o `TodoItem` alterado aparece no log `[render] TodoItem`; os demais não re-renderizam.

## Estrutura de pastas

```
todo-react-avancado/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── ThemeToggle.jsx
    │   ├── TiltCard.jsx
    │   ├── TodoForm.jsx
    │   ├── TodoFilters.jsx
    │   ├── TodoList.jsx
    │   └── TodoItem.jsx
    ├── context/
    │   └── TodoContext.jsx
    ├── hooks/
    │   ├── useInput.js
    │   ├── useLocalStorage.js
    │   └── useTheme.js
    └── styles/
        └── index.css
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/yyunkprod0244/todo-react-avancado.git
cd todo-react-avancado

# 2. Instale as dependências
npm install

# 3. Rode o projeto
npm run dev
```

Abra o endereço mostrado no terminal (geralmente http://localhost:5173).

Para gerar a versão de produção: `npm run build`.

© 2026 Douglas Henrique
