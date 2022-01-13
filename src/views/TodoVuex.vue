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
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();

    const currentTab = ref("all");

    return {
      currentTab,

      pending: computed(() => store.getters["pendingTodos"]),
      all: computed(() => store.getters["allTodos"]),
      completed: computed(() => store.getters["completedTodos"]),

      getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value))
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
