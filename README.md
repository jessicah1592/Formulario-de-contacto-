# Portafolio Creativo - Formulario de Contacto

Aplicación en React con Tailwind CSS para el portafolio en línea de Carlos, diseñador gráfico.

## Características

- Gestión de estados de cada campo (`nombre`, `email`, `mensaje`) mediante `useState`.
- Validación reactiva y en tiempo real de cada entrada.
- Control de envío: el botón "Enviar mensaje" permanece deshabilitado hasta que todos los campos sean estrictamente válidos.
- Simulación interactiva de envío con estado de carga (spinner).
- Pantalla de confirmación con mensaje de éxito ("¡Gracias por tu mensaje!"), resumen de los datos enviados y opción para enviar otro mensaje.
- Diseño visual moderno y adaptado para diseñadores gráficos usando Tailwind CSS.

## Requisitos de Validación

1. **Nombre**: obligatorio y con un mínimo de 3 caracteres.
2. **Correo Electrónico**: obligatorio y con formato válido (`usuario@dominio.ext`).
3. **Mensaje**: obligatorio y con un mínimo de 10 caracteres (contador visible en pantalla).

## Ejecución local

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir la URL mostrada en la terminal (usualmente `http://localhost:5173/`).

4. Para compilar a producción:
```bash
npm run build
```

## Subir a un Repositorio Público en GitHub

1. Inicializar git en la raíz del proyecto si aún no está inicializado:
```bash
git init
git add .
git commit -m "Formulario de contacto para portafolio de Carlos"
```

2. Crear un nuevo repositorio en GitHub y asegurarse de marcar la opción **Public** (Público).

3. Vincular y subir:
```bash
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```
