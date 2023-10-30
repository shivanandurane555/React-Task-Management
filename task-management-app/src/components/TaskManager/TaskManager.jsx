import { Row, Col } from "reactstrap";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";

const TaskManager = () => {
  return (
    <>
      <Row>
        <Col>
          <TaskForm />
        </Col>
        <Col>
          <TaskList />
        </Col>
      </Row>
    </>
  );
};

export default TaskManager;
