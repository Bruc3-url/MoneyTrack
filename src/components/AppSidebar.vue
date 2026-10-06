<template>
  <div>
    <ul class="menu bg-base-200 rounded-box w-56">
      <li>
        <RouterLink to="/gastos">Gastos</RouterLink>
      </li>
      <li>
        <RouterLink to="/ingresos">Ingresos</RouterLink>
      </li>
      <li>
        <RouterLink to="/balance">Balance</RouterLink>
      </li>
      <li>
        <RouterLink to="/perfil">Perfil</RouterLink>
      </li>
    </ul>
    <button class="btn btn-primary mt-4 justify-content">Cerrar sesión</button>
  </div>
</template>
