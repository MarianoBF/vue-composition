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

  <button @click="openModal">Crear item</button>
  <modal title="Un titulo"  v-if="isOpen" @on:close="closeModal">
    <template v-slot:content>
      <p>Crear una tarea</p>
      <input v-model="newText" type="text" />
      <button @click="createTodo(newText)">Guardar</button>
      <button @click="closeModal">Salir</button>
    </template>
  </modal>
</template>

<script>
import useTodos from "../composables/useTodos";
import { ref } from "vue";
import Modal from "../components/Modal";

export default {
  components: { Modal },

  setup() {
    const isOpen = ref(false);

    const newText = ref('')

    const {
      pending,
      all,
      currentTab,
      completed,
      toggleTodo,
      getTodosByTab,
      createTodo,
    } = useTodos();

    return {
        newText,
      pending,
      all,
      currentTab,
      completed,
      toggleTodo,
      getTodosByTab,
      createTodo,
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
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
