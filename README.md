# Frontend - Asistente Turístico Colombia 🇨🇴

Este es el frontend para la aplicación de Asistente Turístico. Es una aplicación web moderna construida con **React**, **TypeScript** y **Vite**, diseñada para ofrecer una experiencia de usuario fluida y atractiva.

## 🚀 Características

*   **Interfaz de Chat**: Comunicación en tiempo real con el asistente turístico.
*   **Botones de Mapas**: Genera automáticamente botones para buscar lugares recomendados en Google Maps.
*   **Diseño Responsivo**: Funciona perfectamente en móviles y escritorio.
*   **Estilos Modernos**: Utiliza Tailwind CSS (o CSS personalizado) para una apariencia premium.

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio** (si no lo has hecho):
    ```bash
    git clone <tu-repo>
    cd frontend
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Variables de Entorno**:
    Crea un archivo `.env` en la raíz de la carpeta `frontend` (para desarrollo local) o configura las variables en tu plataforma de despliegue.
    ```env
    VITE_BACKEND_URL=http://localhost:5000
    ```
    *Nota: En producción, esta URL debe apuntar a tu backend desplegado en Render.*

## ▶️ Ejecución Local

```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

## ☁️ Despliegue en Vercel

1.  Sube tu código a GitHub.
2.  En Vercel, crea un **Nuevo Proyecto** e importa tu repositorio.
3.  Configura el **Root Directory** a `frontend`.
4.  En **Environment Variables**, añade:
    *   `VITE_BACKEND_URL`: La URL de tu backend en Render (ej: `https://gemini-backend-xxxx.onrender.com`).
5.  Haz clic en **Deploy**.

## 📂 Estructura del Proyecto

*   `src/components`: Componentes de React (Chatbot, Navbar, etc.).
*   `src/services`: Lógica de comunicación con la API (`geminiService.ts`).
*   `src/types.ts`: Definiciones de tipos TypeScript.
*   `vercel.json`: Configuración para el enrutamiento en Vercel (SPA).
