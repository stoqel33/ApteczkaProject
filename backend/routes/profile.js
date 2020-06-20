const router = require('express').Router();
const passport = require('passport');

const Profile = require('../models/profile.model');
const User = require('../models/user.model');

const validateProfileInput = require('../validation/profile');

// Get current user profile
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .populate('user', ['name'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

// Create or edit user profile
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  // Check validation
  // Return errors
  if (!isValid) return res.status(400).json(errors);

  // Get fileds
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.nickname) profileFields.nickname = req.body.nickname;
  if (req.body.birthDate) profileFields.birthDate = req.body.birthDate;

  Profile.findOne({ user: req.user.id }).then((profile) => {
    if (profile) {
      // Update profile

      Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true },
      ).then((profile) => res.json(profile));
    } else {
      // Create profile

      // Check if nickname exists
      // Profile.findOne({ nickname: profileFields.nickname }).then((profile) => {
      //   if (profile) {
      //     errors.nickname = 'That nickname already exists';
      //     res.status(400).json(errors);
      //   }

      //   // Save profile
      // });

      new Profile(profileFields).save().then((profile) => res.json(profile));
    }
  });
});

// Delete user and profile

router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOneAndRemove({ user: req.user.id }).then(() => {
    User.findOneAndRemove({ _id: req.user.id }).then(() => res.json({ success: true }));
  });
});

module.exports = router;
