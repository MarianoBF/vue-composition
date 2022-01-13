<template>
  <h1>Probando slots</h1>
  <button @click="openModal">Abrir modal</button>
  <modal title="Hola soy un modal" v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h2>Título de modal</h2>
    </template>
    <template v-slot:content>
      <p>Un texto de prueba</p>
      <button @click="closeModal">Salir</button>
    </template>
    <template v-slot:exposed="slotProps">
        <h2>{{slotProps.newTitle}}</h2>
    </template>
  </modal>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal";
export default {
  components: { Modal },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

<style></style>
