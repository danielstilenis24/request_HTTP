const express = require('express');
const router = express.Router();
const personSchema = require('../models/person_model');

//---------------------------------si----------------------------------------------------------
/* Creacion de un recurso*/
router.post('/person', (req, res) => {
  const person = personSchema(req.body);
  person
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});
//--------------------------------si-----------------------------------------------------------
/* Listar todos los recursos*/
router.post('/', (req, res) => {
  personSchema.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});
//-------------------------------si------------------------------------------------------------
/* Consultar un recurso específico */
router.get('/:personId', (req, res) => {
  const { personId } = req.params
  personSchema.findById(personId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});
//-------------------------------------------------------------------------------------------
/* Editar un recurso específico*/
router.put('/:personId', (req, res) => {
  const { personId } = req.params;
  const { client_name, address = ({ city, code_zip, geo }), contact = ({ email, cellphone }) } = req.body
  personSchema.updateOne({ _id: personId }, { $set: { client_name, address, contact } })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});
//-------------------------------------------------------------------------------------------
/* Eliminar un recurso específico */
router.delete('/:personId', (req, res) => {
  const { personId } = req.params;
  personSchema
    .remove({ _id: personId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;


