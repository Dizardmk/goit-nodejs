const { Schema, model } = require('mongoose');

const contactSchema = Schema(
  {
    name: {
      type: String,
      minlength: [2, 'contact name must contain a minimum of 2 letters.'],
      required: [true, 'is required, set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      minlength: [10, 'contact number must contain a minimum of 10 symbols.'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false },
);

module.exports = model('contact', contactSchema);
