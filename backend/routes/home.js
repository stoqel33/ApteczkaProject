/* eslint-disable no-param-reassign */
const router = require('express').Router();
const Medicines = require('../models/medicines.model');

// Get medicines

router.get('/', (req, res) => {
  Medicines.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

// Add new medicine

router.post('/addMedicine', (req, res) => {
  const { name, copy } = req.body.type;
  const amount = Number(req.body.type.amount);
  const expiryDate = Date.parse(req.body.type.date);
  const newMedicine = new Medicines({
    name,
    amount,
    expiryDate,
    copy,
  });
  newMedicine
    .save()
    .then(() => res.json(newMedicine))
    .catch((err) => res.status(400).json(`Error${err} baddd`));
});

// Delte current medicine

router.delete('/editMedicine/:id', (req, res) => {
  Medicines.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json('Medicine deleted!');
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});

// Update current medicine

router.post('/editMedicine/update/:id', (req, res) => {
  Medicines.findById(req.params.id)
    .then((medicine) => {
      medicine.name = req.body.type.name;
      medicine.amount = Number(req.body.type.amount);
      medicine.expiryDate = Date.parse(req.body.type.date);
      medicine
        .save()
        .then(() => res.json(medicine))
        .catch((err) => res.status(400).json(`Error${err}`));
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});

// Diminish one current medicine

router.put('/takePill/:id', (req, res) => {
  Medicines.findById(req.params.id)
    .then((medicine) => {
      medicine.amount -= 1;
      medicine
        .save()
        .then(() => res.json(medicine))
        .catch((err) => res.status(400).json(`Error${err}`));
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});

module.exports = router;
