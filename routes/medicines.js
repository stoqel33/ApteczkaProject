/* eslint-disable no-param-reassign */
const router = require("express").Router();
const passport = require("passport");

const Medicines = require("../models/medicines.model");
const Profile = require("../models/profile.model");

const validateMedicinesInput = require("../validation/medicines");

// Get user medicines
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Medicines.find({ user: req.user.id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(400).json(`Error ${err}`));
  }
);

// Add new medicine
router.post(
  "/addMedicine",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMedicinesInput(req.body);
    // // Check Validation
    if (!isValid) return res.status(400).json(errors);

    const { name, copy } = req.body;
    const amount = Number(req.body.amount);
    const expiryDate = Date.parse(req.body.date);
    const newMedicine = new Medicines({
      name,
      amount,
      expiryDate,
      copy,
      user: req.user.id,
    });
    newMedicine
      .save()
      .then(() => res.json(newMedicine))
      .catch((err) => res.status(400).json(`Error ${err}`));
  }
);

// Delete current medicine
router.delete(
  "/editMedicine/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(() => {
      Medicines.findById(req.params.id)
        .then((medicine) => {
          // Check for medicine owner
          if (medicine.user.toString() !== req.user.id)
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });

          // Delete medicine
          medicine.remove().then(() => res.json({ success: true }));
        })
        .catch(() =>
          res.status(404).json({ medicinenotfound: "No medicine found" })
        );
    });
  }
);

// Update current medicine

router.post(
  "/editMedicine/update/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(() => {
      Medicines.findById(req.params.id)
        .then((medicine) => {
          // Check for medicine owner
          if (medicine.user.toString() !== req.user.id)
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });

          // Update medicine
          medicine.name = req.body.name;
          medicine.amount = Number(req.body.amount);
          medicine.expiryDate = Date.parse(req.body.date);
          medicine.save().then(() => res.json({ success: true, medicine }));
        })
        .catch(() =>
          res.status(404).json({ medicinenotfound: "No medicine found" })
        );
    });
  }
);

// Diminish one current medicine
router.put(
  "/takePill/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(() => {
      Medicines.findById(req.params.id)
        .then((medicine) => {
          // Check for medicine owner
          if (medicine.user.toString() !== req.user.id)
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });

          medicine.amount -= 1;
          medicine.save().then(() => res.json(medicine));
        })
        .catch(() =>
          res.status(404).json({ medicinenotfound: "No medicine found" })
        );
    });
  }
);

module.exports = router;
