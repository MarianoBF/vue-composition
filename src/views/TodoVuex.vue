<template>
  <h1>Lista de tareas</h1>
  <p>Cantidad: {{$store.state.todos.length}}</p>
  <p>Pendientes: {{pending.length}}</p>
</template>

<script>

import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
    setup() {
        const store = useStore()

        return {
            pending: computed(()=>store.getters['pendingTodos'])
        }
    }

}
</script>

<style>

</style>