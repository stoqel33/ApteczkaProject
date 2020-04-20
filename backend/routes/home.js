/* eslint-disable no-param-reassign */
const router = require('express').Router();
const Medicines = require('../models/medicines.model');

router.route('/').get((req, res) => {
  Medicines.find()
    .then((medicines) => res.json(medicines))
    .catch((err) => res.status(400).json(`Error ${err}`));
});
router.route('/addMedicine').post((req, res) => {
  const { name } = req.body;
  const amount = Number(req.body.amount);
  const expiryDate = Date.parse(req.body.expiryDate);

  const newMedicine = new Medicines({
    name,
    amount,
    expiryDate,
  });

  newMedicine
    .save()
    .then(() => res.json('New medicine added!'))
    .catch((err) => res.status(400).json(`Error${err}`));
});
router.route('/editMedicine/:id').get((req, res) => {
  Medicines.findById(req.params.id)
    .then((medicine) => res.json(medicine))
    .catch((err) => res.status(400).json(`Error ${err}`));
});
router.route('/editMedicine/:id').delete((req, res) => {
  Medicines.findByIdAndDelete(req.params.id)
    .then(() => res.json('Medicine deleted!'))
    .catch((err) => res.status(400).json(`Error ${err}`));
});
router.route('/editMedicine/update/:id').post((req, res) => {
  Medicines.findById(req.params.id)
    .then((medicine) => {
      medicine.name = req.body.name;
      medicine.amount = Number(req.body.amount);
      medicine.expiryDate = Date.parse(req.body.expiryDate);

      medicine
        .save()
        .then(() => res.json('Medicine updated!'))
        .catch((err) => res.status(400).json(`Error${err}`));
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});

module.exports = router;
