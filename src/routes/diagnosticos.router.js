const{Router}= require('express');

const router= Router();

const diagnsticosCtr1= require('../controllers/diagnosticos.controller');

router.get('/diagnosticos/saludo',diagnsticosCtr1.saludo);

router.get('/diagnosticos/:folio', diagnsticosCtr1.getById);

router.get('/diagnosticos', diagnsticosCtr1.getAll);

router.post('/diagnosticos', diagnsticosCtr1.add);

router.delete('/diagnosticos/:folio', diagnsticosCtr1.delete);

router.put('/diagnosticos/:folio', diagnsticosCtr1.update);


module.exports= router;
