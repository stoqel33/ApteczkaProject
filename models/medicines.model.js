const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicinesSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      minlength: 3,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    copy: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Medicines = mongoose.model('Medicines', medicinesSchema);

module.exports = Medicines;
