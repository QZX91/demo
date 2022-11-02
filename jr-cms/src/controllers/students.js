const StudentModel = require("../models/student");
const CourseModel = require("../models/course");

const getAllStudents = async (req, res) => {
  const students = await StudentModel.find().exec();
  res.json(students);
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findById(id).populate("courses").exec();
  if (!student) {
    res.status(404).json({ error: "student not found" });
    return;
  }
  res.json(student);
};

const addStudent = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const student = new StudentModel({ firstName, lastName, email });
  await student.save();
  res.status(201).json(student);
};

const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const student = await StudentModel.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true }
  ).exec();
  if (!student) {
    res.status(404).json({ error: "student not found" });
    return;
  }
  res.json(student);
};

const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findByIdAndDelete(id).exec();
  if (!student) {
    res.status(404).json({ error: "student not found" });
    return;
  }

  await CourseModel.updateMany(
    { student: id },
    {
      $pull: {
        student: id,
      },
    }
  ).exec();

  res.sendStatus(204);
};

const addStudentToCourse = async (req, res) => {
  const { id, code } = req.params;
  const student = await StudentModel.findById(id).exec();
  const course = await CourseModel.findById(code).exec();

  if (!student || !course) {
    res.status(404).json({ error: "student or course not found" });
  }

  course.students.addToSet(id);
  await course.save();

  await StudentModel.findByIdAndUpdate(
    id,
    { $addToSet: { courses: code } },
    { new: true }
  );
  res.json(student);
};

const removeStudentFromCourse = async (req, res) => {
  const { id, code } = req.params;
  let student = await StudentModel.findById(id).exec();
  const course = await CourseModel.findById(code).exec();

  if (!student || !course) {
    res.status(404).json({ error: "student or course not found" });
  }

  student = await Student.findByIdAndUpdate(
    id,
    {
      $pull: {
        course: code,
      },
    },
    { new: true }
  ).exec();

  await CourseModel.findByIdAndUpdate(code, { $pull: { student: id } }).exec();

  res.json(student);
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
  addStudentToCourse,
  removeStudentFromCourse,
};
