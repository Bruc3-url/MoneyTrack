<template>
  <h1 class="text-center font-bold">Mis Gastos</h1>
  <div
    class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
  >
  
    <table class="table table-pin-rows bg-base-200">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(gasto, index) in dashboardData"
          :key="gasto.nombre + gasto.fecha.toISOString()"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ gasto.nombre }}</td>
          <td>{{ gasto.categoria }}</td>
          <td>{{ gasto.fecha.toLocaleDateString("es-CO") }}</td>
          <td>{{ gasto.hora.toLocaleTimeString("es-CO") }}</td>
          <td>{{ gasto.cantidad }}</td>
          <!-- Las demás columnas -->
        </tr>
      </tbody>
    </table>
  </div>
  <InputModal :open="modalOpen" @close="modalOpen = false" />
  <br>
  <button class="btn btn-primary" @click="modalOpen = true">Nuevo Gasto</button>
</template>

<script setup lang="ts">
import { dashboardData } from "../data/dashboardData";
import InputModal from "./InputModal.vue";
import { ref } from "vue";

const modalOpen = ref(false);
</script>
