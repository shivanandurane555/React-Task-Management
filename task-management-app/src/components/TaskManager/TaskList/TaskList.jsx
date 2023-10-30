import { ListGroup } from "reactstrap";
import TaskItem from "./TaskItem/TaskItem.jsx";
import Task from "../../../models/Task.js";

const TaskList = (props) => {
  const tasks = [
    new Task(1, "Learn React"),
    new Task(2, "Learn Components"),
    new Task(3, "Learn Props"),
    new Task(4, "Learn Models"),
    new Task(5, "Learn Redux"),
    new Task(6, "Learn Saga"),
  ];

  return (
    <>
      <ListGroup>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ListGroup>
    </>
  );
};

export default TaskList;
