<template>
  <nav class="navbar bg-base-200 shadow-sm px-6">
    <!-- Logo -->
    <div class="flex-2">
      <RouterLink to="/dashboard" class="text-xl font-bold">
        Mi Dinero
      </RouterLink>
    </div>

    <!-- Navegación horizontal -->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 gap-1">
        <li>
          <RouterLink to="/dashboard"> Dashboard </RouterLink>
        </li>

        <li>
          <RouterLink to="/gastos"> Gastos </RouterLink>
        </li>

        <li>
          <RouterLink to="/ingresos"> Ingresos </RouterLink>
        </li>

        <li>
          <RouterLink to="/balance"> Balance </RouterLink>
        </li>

        <li>
          <RouterLink to="/perfil" >
            <FatButton>
              <IconPerfil class="w-7 h-6" />
            </FatButton>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import FatButton from "./common/FatButton.vue";
import IconPerfil from "../Icons/IconPerfil.vue";
</script>
