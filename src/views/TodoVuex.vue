<template>
  <h1>Lista de tareas</h1>
  <hr />
  <button @click="currentTab = 'all'" :class="{ active: currentTab === 'all' }">
    Cantidad total: {{ all.length }}
  </button>
  <button
    @click="currentTab = 'pending'"
    :class="{ active: currentTab === 'pending' }"
  >
    Pendientes: {{ pending.length }}
  </button>
  <button
    @click="currentTab = 'completed'"
    :class="{ active: currentTab === 'completed' }"
  >
    Finalizados: {{ completed.length }}
  </button>
  <hr />
  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import useTodos from "../composables/useTodos"

export default {
  setup() {

      const {pending, all, currentTab, completed, toggleTodo, getTodosByTab} = useTodos()


    return {
        pending, all, currentTab, completed, toggleTodo, getTodosByTab
    }

  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background: blue;
  color: red;
}

.completed {
  text-decoration: line-through;
}
</style>
