# 🛒 Calculadora de Propina con React + TypeScript

Este proyecto es una aplicación práctica de **calculadora de propinas**, desarrollada para reforzar conocimientos de **React con TypeScript**.  
La app permite **seleccionar ítems de un menú**, añadirlos a un **carrito dinámico**, calcular el **total del consumo** y aplicar un **porcentaje de propina** antes de generar la orden.  
Todo se maneja **de forma local** utilizando los principales hooks de React.

---

## 🚀 Características principales
- 📦 **Menú dinámico**: los productos se muestran según su stock disponible.  
- 🛍️ **Carrito interactivo**: actualización en tiempo real de cantidades y totales.  
- 💸 **Cálculo de propina**: selección de diferentes porcentajes para ajustar el monto final.  
- ⚡ **Rendimiento optimizado** con `useMemo` para cálculos derivados.  
- 🎯 **Gestión de estado avanzada** con `useReducer` para el carrito de compras.  
- 🎨 **Interfaz responsive** construida con **TailwindCSS**.  

---

**Hooks de React aplicados:**
- `useState` → Manejo de estados locales (inputs, selección de propina, etc).  
- `useReducer` → Lógica del carrito de compras (añadir, quitar, actualizar cantidades).  
- `useMemo` → Optimización en cálculos de totales y propinas.  

---

## 📂 Estructura del proyecto

```
├─ components/ # Componentes reutilizables (MenuItem, OrderContent, OrderTotal, TipPercentageForm.)
├─ reducer/ # Lógica del carrito con useReducer
├─ data/ # Data local (menú, productos, etc.)
└─ App.jsx # Punto de entrada principal
```
---

## 🛠️ Tecnologías utilizadas
- [Vite](https://vitejs.dev/) — entorno de desarrollo rápido.
- [React](https://react.dev/) — librería principal.
- [React-Toastify](https://fkhadra.github.io/react-toastify/) — notificaciones.

---

## 🔧 Setup del proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/thonyrm/tip_project.git
   ```
2. Instalar dependencias:

    ```
    npm install
    ```

3. Ejecutar en modo desarrollo:
    ```
    npm run dev
    ```

---

## 🌐 Demo en línea
Puedes probar el proyecto funcionando aquí:  
👉 [Calculadora de propinas en Vercel](https://tip-project-xi.vercel.app/)