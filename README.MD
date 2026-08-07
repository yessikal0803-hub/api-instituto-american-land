# API — Instituto American Land
## Evidencia EV03 — Diseño y Desarrollo de Servicios Web

### 📋 Descripción
API Rest desarrollada para la gestión de estudiantes del Instituto American Land. Permite consultar, registrar, actualizar y eliminar información de estudiantes.

### 🔗 URL Base
`http://localhost:3000/api`

### 📋 Endpoints Disponibles

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/estudiantes` | Obtener todos los estudiantes |
| GET | `/estudiantes/:id` | Obtener un estudiante por ID |
| POST | `/estudiantes` | Registrar nuevo estudiante |
| PUT | `/estudiantes/:id` | Actualizar datos de estudiante |
| DELETE | `/estudiantes/:id` | Eliminar estudiante |

### ✅ Validaciones Implementadas
- **400 Bad Request:** Faltan datos obligatorios (nombre, edad, curso, correo)
- **404 Not Found:** El estudiante con el ID indicado no existe
- **201 Created:** Estudiante registrado exitosamente

### 🛠️ Tecnologías
- Node.js
- Express.js

### 👤 Datos Obligatorios para Registrar
- nombre
- edad
- curso
- correo