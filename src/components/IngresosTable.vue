<template>
  <h1 class="text-center font-bold">Mis Ingresos</h1>
  <div
    class="overflow-x-auto rounded-box border border-base-content/4 bg-base-100"
  >
  
    <table class="table table-pin-rows bg-base-200">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(ingreso, index) in IngresosData"
          :key="ingreso.nombre + ingreso.fecha.toISOString()"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ ingreso.nombre }}</td>
          <td>{{ ingreso.fecha.toLocaleDateString("es-CO") }}</td>
          <td>{{ ingreso.hora.toLocaleTimeString("es-CO") }}</td>
          <td>{{ ingreso.cantidad }}</td>
          <!-- Las demás columnas -->
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Total</th>
          <th></th>
          <th></th>
          <th>{{ totalIngresos === 0 ? 0 : totalIngresos }}</th>
        </tr> </tfoot>
    </table>
  </div>
  <IngresosModal :open="modalOpen" @close="modalOpen = false" />
  <br>
  <button class="btn bg-green-600 hover:bg-green-700 text-white" @click="modalOpen = true">Nuevo Ingreso</button>
</template>

<script setup lang="ts">
import { IngresosData    } from "../data/dashboardData.ts";
import IngresosModal from "./IngresosModal.vue";
import { ref, computed } from "vue";

const modalOpen = ref(false);


//Calcular el total de ingresos
 const totalIngresos = computed(() => {
  const ingreso =ref(0);
  for (let i = 0; i < IngresosData.value.length; i++) {
    ingreso.value += IngresosData.value[i].cantidad;
  }
  return ingreso.value;
});



</script>
