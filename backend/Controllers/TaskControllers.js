const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();

  res.send(tasks);
};
module.exports.saveTasks = (req, res) => {
  const { title, tag, content } = req.body; // Destructure title, tag, and content from req.body

  // Create a new task using the Task model
  TaskModel.create({ title, tag, content })
    .then((data) => {
      console.log("Task Saved Successfully");
      res.status(201).send(data); // Send the saved task data as response
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" }); // Send an error response if there's an issue with saving the task
    });
};
module.exports.updateTasks = (req, res) => {
  const { id } = req.params;
  const { title, tag, content } = req.body;
  TaskModel.findByIdAndUpdate(id, { title, tag, content })
    .then(() => res.send("Updated successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteTasks = (req, res) => {
  const { id } = req.params;
  TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
