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
          v-for="(gasto, index) in GastosData"
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
      <tfoot>
        <tr>
          <th></th>
          <th>Total</th>
          <th></th>
          <th></th>
          <th></th>
          <th>{{ totalGastos }}</th>
        </tr> </tfoot>
    </table>
  </div>
  <GastosModal :open="modalOpen" @close="modalOpen = false" />
  <br>
  <button class="btn bg-red-600 hover:bg-red-700 text-white" @click="modalOpen = true">Nuevo Gasto</button>
</template>

<script setup lang="ts">
import { GastosData } from "../data/dashboardData.ts";
import GastosModal from "./GastosModal.vue";
import { ref, computed } from "vue";

const modalOpen = ref(false);


//Calcular el total de gastos
 const totalGastos = computed(() => {
  let gasto = 0;
  for (let i = 0; i < GastosData.value.length; i++) {
    gasto += GastosData.value[i].cantidad;
  }
  return gasto;
});



</script>
