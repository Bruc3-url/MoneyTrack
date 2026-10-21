import { type DashboardData } from "../types/dashboard";
import { ref } from "vue";

export const dashboardData= ref<DashboardData[]>([
   {
    nombre: "Compra de mercado",
    categoria: "comida",
    fecha: new Date("2026-10-01"),
    hora: new Date("2026-10-01T08:30:00"),
    cantidad: 85000,
  },
  {
    nombre: "Pasaje de bus",
    categoria: "transporte",
    fecha: new Date("2026-10-02"),
    hora: new Date("2026-10-02T07:15:00"),
    cantidad: 3200,
  }
]);
