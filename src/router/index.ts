import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Publicas
    {
      path: "/",
      name: "home",
      component: () => import("../layouts/AppLayout.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    //Privadas
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },

    {
      path: "/gastos",
      name: "gastos",
      component: () => import("../views/GastosView.vue"),
    },

    {
      path: "/ingresos",
      name: "ingresos",
      component: () => import("../views/IngresosView.vue"),
    },
    {
      path: "/balance",
      name: "balance",
      component: () => import("../views/BalanceView.vue"),
    },
    {
      path: "/perfil",
      name: "perfil",
      component: () => import("../views/PerfilView.vue"),
    },
  ],
});
export default router;
