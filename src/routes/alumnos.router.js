const{Router}= require('express');

const router= Router();

const alumnosCtr1= require('../controllers/alumnos.controller');

router.get('/alumnos/saludo', alumnosCtr1.saludo);

router.get('/alumnos/:numcontrol', alumnosCtr1.getById);

router.get('/alumnos', alumnosCtr1.getAll);

router.post('/alumnos', alumnosCtr1.add);

router.delete('/alumnos/:numcontrol', alumnosCtr1.delete);

router.put('/alumnos/:numcontrol', alumnosCtr1.update);


module.exports= router;