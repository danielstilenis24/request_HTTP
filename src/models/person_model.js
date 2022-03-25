const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
  client_name: { type: String, require: true },
  addres: [{
    type: Array, require: true,
    city: { type: String, require: true },
    code_zip: { type: String, require: true },
    geo: [{
      type: Array, require: true,
      lat: { type: String, require: true },
      long: {
        type: String,
        require: true,
      },
    }],
  }],
  contact: {
    type: Object, require: true,
    email: { type: Object, require: true },
    cellphone: { type: Object, require: true }
  }
}
);

module.exports = mongoose.model('PersonCollection', personSchema);


