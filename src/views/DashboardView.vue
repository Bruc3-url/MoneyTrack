<template>
  <div>
    <h1 class="texto font-bold">¡Hola, Bruce!</h1>
    <h2>Aqui tienes un resumen de tus finanzas personales</h2>
  </div>
  <br>
  <div class="Targetas">
    <MoneyCards/>
  </div>
</template>

<script setup lang="ts">
import MoneyCards from '../components/common/MoneyCards.vue'; 
</script>



<style scoped>
.texto {
  font-size: 24px;
  
}
</style>
