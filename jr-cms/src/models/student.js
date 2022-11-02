const { Schema, model } = require("mongoose");
const Joi = require("joi");

const schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (email) => {
          // const validation = Joi.string().email().validate(email);
          // const { error } = validation;
          // if (error) {
          //   return false;
          // }
          // return true;
          return !Joi.string().email().validate(email).error;
        },
        msg: "Invalid email format",
      },
    },
    courses: [
      {
        type: String,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

schema.virtual("full name").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const StudentModel = model("Student", schema);

module.exports = StudentModel;
