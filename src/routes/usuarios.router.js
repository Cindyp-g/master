const{Router}= require('express');

const router= Router();

const usuariosCtr1= require('../controllers/usuarios.controller');

router.get('/usuarios/saludo',usuariosCtr1.saludo);

router.get('/usuarios/:idu', usuariosCtr1.getById);

router.get('/usuarios', usuariosCtr1.getAll);

router.post('/usuarios', usuariosCtr1.add);

router.delete('/usuarios/:idu', usuariosCtr1.delete);

router.put('/usuarios/:idu', usuariosCtr1.update);


module.exports= router;