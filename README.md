# Tienda React - ProyectoFinal+Alberto

Este es un proyecto de E-commerce desarrollado con **React JS** y **Firebase**, enfocado en la gestión dinámica de productos y el procesamiento de órdenes de compra en tiempo real.

## 🚀 Funcionalidades

- **Catálogo Dinámico:** Los productos se cargan directamente desde **Cloud Firestore**.
- **Navegación por Categorías:** Filtros funcionales para `libros` y `juegos` mediante `react-router-dom`.
- **Carrito de Compras:** Gestión de estado global con **Context API** (agregar, eliminar ítems y vaciar carrito).
- **Checkout con Firebase:** Formulario de validación que genera una orden de compra en la colección `orders` y devuelve un ID único de seguimiento generado por Firestore.

## 🛠️ Tecnologías Utilizadas

- **React JS** (Hooks: `useState`, `useEffect`, `useContext`, `useParams`).
- **Firebase / Firestore** (Base de datos NoSQL).
- **React Router Dom** (Manejo de rutas y parámetros).
- **Vite** (Herramienta de construcción y entorno de desarrollo).

## 📋 Instrucciones de Configuración

Para correr este proyecto localmente:

1. **Clonar el repositorio:** `git clone [URL-DE-TU-REPO]`
2. **Instalar dependencias:** `npm install`
3. **Configuración de Firebase:** El archivo `src/services/firebaseConfig.js` ya cuenta con la configuración necesaria para conectar con la base de datos del proyecto.
4. **Iniciar la App:** `npm run dev`

## 💡 Cómo probar la aplicación

1. **Navegación:** Al iniciar, verás el **Catálogo Completo**. Usa el menú superior para filtrar por `Libros` o `Juegos`.
2. **Compra:** Agrega un producto al carrito y dirígete al **Checkout**.
3. **Generación de Orden:** Completa el formulario (validación de email incluida). Al finalizar, el sistema mostrará el **ID de Comprobante** real guardado en Firebase.
4. **Persistencia:** La orden se puede verificar inmediatamente en la consola de Firebase del administrador.

## ✒️ Desarrollador

- **Eliezer Alberto** - _Desarrollo de React JS y Configuración de Firebase_ para el curso de React JS en Coderhouse.
