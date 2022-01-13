import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: '1', text: 'Tarea 1', completed: false},
      {id: '2', text: 'Tarea 2', completed: true},
      {id: '3', text: 'Tarea 3', completed: true},
      {id: '4', text: 'Tarea 4', completed: false},
      {id: '5', text: 'Tarea 5', completed: false},
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter( todo => !todo.completed)
    }
  },
  modules: {
  }
})
