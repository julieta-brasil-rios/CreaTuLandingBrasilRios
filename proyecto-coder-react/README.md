# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---------------------------------------------------------------------------------------------------------------------------------------------
# 🛒 PROYECTO REACT – E-commerce Deportivo

Este proyecto es un **e-commerce básico desarrollado con React**, realizado como parte del curso.  
La idea principal es simular una tienda online de **indumentaria y suplementos deportivos**, donde el usuario puede navegar productos, agregarlos al carrito y finalizar una compra.

---

## 🚀 TECNOLOGIAS USADAS

- React
- Vite
- JavaScript
- Firebase / Firestore
- CSS
- React Router DOM

---

## 📦 FUNCIONES PRINCIPALES

- Listado de productos en el Home
- Filtro de productos por categorías
- Vista en detalle de cada producto
- Carrito de compras
- Agregar productos al carrito
- Vaciar carrito
- Confirmar compra
- Generación de una orden en Firestore
- Visualización del **ID de la orden generada**
- Renderizado condicional de mensajes:
- “Cargando productos…”
- “Carrito vacío”


---

## 🛍️ FLUJO DE COMPRAS

1. El usuario navega por el listado de productos
2. Selecciona un producto y lo agrega al carrito
3. Accede al carrito de compras
4. Confirma la compra
5. Se genera una orden en Firestore
6. Se muestra el **ID de la orden** como confirmación de la compra

---

## 🗂️ ESTRUCTURA RESUMIDA

- `components/` → componentes reutilizables (cards, navbar, etc.)
- `pages/` → páginas principales (Home, Cart, Category)
- `context/` → contexto global del carrito
- `firebase/` → configuración de Firebase
- `services/` → obtención de productos
- `assets/` → imágenes del proyecto

---
