const mongoose = require("mongoose") 
const Schema = mongoose.Schema; 

const studentSchema = new Schema({
    firstName :{
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    course: { type: String, enum: ['BTech', 'BCA', 'MTECH', 'MCA'], required: true },
  dob: { type: Date, required: true }

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;