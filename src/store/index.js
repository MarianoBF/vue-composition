import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: "1", text: "Tarea 1", completed: false },
      { id: "2", text: "Tarea 2", completed: true },
      { id: "3", text: "Tarea 3", completed: true },
      { id: "4", text: "Tarea 4", completed: false },
      { id: "5", text: "Tarea 5", completed: false },
    ],
  },
  mutations: {
    toggleTodo(state, id) {
      const TodoIdx = state.todos.findIndex((todo) => todo.id === id);
      state.todos[TodoIdx].completed = !state.todos[TodoIdx].completed
    },
    createTodo(state, text = '') {
      state.todos.push({id: Number(new Date()), completed: false, text})
    }
  },
  actions: {},
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((todo) => !todo.completed);
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter((todo) => todo.completed);
    },
    allTodos(state, getters, rootState) {
      return state.todos;
    },
    getTodosByTab: (state, getters, rootState) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;
        case "pending":
          return getters.pendingTodos;
        case "completed":
          return getters.completedTodos;
      }
    },
  },
  modules: {},
});
