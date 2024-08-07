const{Router}= require('express');

const router= Router();

const empleadosCtr1= require('../controllers/empleados.controller');

router.get('/empleados/saludo',empleadosCtr1.saludo);

router.get('/empleados/:id', empleadosCtr1.getById);

router.get('/empleados', empleadosCtr1.getAll);

router.post('/empleados', empleadosCtr1.add);

router.delete('/empleados/:id', empleadosCtr1.delete);

router.put('/empleados/:id', empleadosCtr1.update);


module.exports= router;
