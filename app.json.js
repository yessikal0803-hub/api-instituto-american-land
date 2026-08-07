const express = require('express');
const app = express();

app.use(express.json());

// Lista de estudiantes
let estudiantes = [
    {
        id: 1,
        nombre: "Ana Gómez",
        edad: 20,
        curso: "Inglés A1",
        correo: "ana@correo.com"
    },
    {
        id: 2,
        nombre: "Juan Pérez",
        edad: 18,
        curso: "11A",
        correo: "juan@example.com"
    }
];

// GET - Obtener todos los estudiantes
app.get('/api/estudiantes', (req, res) => {
    res.json(estudiantes);
});

// GET - Obtener un estudiante por ID
app.get('/api/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const est = estudiantes.find(e => e.id === id);

    if (est) {
        res.json(est);
    } else {
        res.status(404).json({
            mensaje: "Estudiante NO encontrado"
        });
    }
});

// POST - Crear estudiante
app.post('/api/estudiantes', (req, res) => {
    const { nombre, edad, curso, correo } = req.body;

    if (!nombre || !edad || !curso || !correo) {
        return res.status(400).json({
            mensaje: "FALTAN DATOS: debes escribir nombre, edad, curso y correo"
        });
    }

    const nuevo = {
        id: estudiantes.length + 1,
        nombre,
        edad,
        curso,
        correo
    };

    estudiantes.push(nuevo);

    res.status(201).json({
        mensaje: "Estudiante CREADO con éxito",
        datos: nuevo
    });
});

// PUT - Actualizar estudiante
app.put('/api/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const posicion = estudiantes.findIndex(e => e.id === id);

    if (posicion === -1) {
        return res.status(404).json({
            mensaje: "Estudiante NO encontrado"
        });
    }

    const { nombre, edad, curso, correo } = req.body;

    if (!nombre || !edad || !curso || !correo) {
        return res.status(400).json({
            mensaje: "FALTAN DATOS"
        });
    }

    estudiantes[posicion] = {
        id,
        nombre,
        edad,
        curso,
        correo
    };

    res.json({
        mensaje: "Estudiante ACTUALIZADO",
        datos: estudiantes[posicion]
    });
});

// DELETE - Eliminar estudiante
app.delete('/api/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const posicion = estudiantes.findIndex(e => e.id === id);

    if (posicion === -1) {
        return res.status(404).json({
            mensaje: "Estudiante NO encontrado"
        });
    }

    estudiantes.splice(posicion, 1);

    res.json({
        mensaje: "Estudiante ELIMINADO"
    });
});

// Puerto
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`SERVIDOR ENCENDIDO: http://localhost:${PORT}`);
})
;