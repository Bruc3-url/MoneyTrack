<template>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <h2>Nuevo gasto</h2>

      <div class="modal-action flex flex-col">
        <form method="dialog">
          <div>
            <input
              type="text"
              placeholder="Nombre del proyecto"
              class="input input-bordered input-primary w-full flex-1"
              v-model="nombre"
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Categoria"
              class="input input-bordered input-primary w-full flex-1"
              v-model="categoria"
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Cantidad"
              class="input input-bordered input-primary w-full flex-1"
              v-model="cantidad"
            />
          </div>
          <br />
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn btn-primary mr-5" @click="AgregarGasto">
            Agregar gasto
          </button>
          <button type="submit" class="btn btn-active btn-error">
            Cancelar
          </button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { dashboardData } from "../data/dashboardData";
import { ref } from "vue";
interface Props {
  open: boolean;
}

defineProps<Props>();

const nombre = ref("");
const categoria = ref("");
const cantidad = ref(0);

const AgregarGasto = () => {
  dashboardData.value.push({
    nombre: nombre.value,
    categoria: categoria.value,
    fecha: new Date(),
    hora: new Date(),
    cantidad: cantidad.value,
  });
//Limpiar el input
  nombre.value = "";
  categoria.value = "";
  cantidad.value = 0;


  return dashboardData.value
};
</script>
