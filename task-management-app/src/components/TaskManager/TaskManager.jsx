import { Row, Col } from "reactstrap";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import Task from "../../models/Task";

const TaskManager = () => {
  const tasks = [
    new Task(1, "Learn React"),
    new Task(2, "Learn Components"),
    new Task(3, "Learn Props"),
    new Task(4, "Learn Models"),
    new Task(5, "Learn Redux"),
    new Task(6, "Learn Saga"),
  ];

  const addTask = (data) => {
    console.log(data);
  };

  return (
    <>
      <Row>
        <Col>
          <TaskForm  addTask={addTask} />
        </Col>
        <Col>
          <TaskList tasks={tasks} />
        </Col>
      </Row>
    </>
  );
};

export default TaskManager;
