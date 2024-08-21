const{Router}= require('express');

const router= Router();

const justificantesCtr1= require('../controllers/justificantes.controller');

router.get('/justificantes/saludo',justificantesCtr1.saludo);

router.get('/justificantes/:id_j', justificantesCtr1.getById);

router.get('/justificantes', justificantesCtr1.getAll);

router.post('/justificantes', justificantesCtr1.add);

router.delete('/justificantes/:id_j', justificantesCtr1.delete);

router.put('/justificantes/:id_j', justificantesCtr1.update);


module.exports= router;