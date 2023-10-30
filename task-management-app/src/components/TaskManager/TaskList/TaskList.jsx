import { ListGroup } from "reactstrap";
import TaskItem from "./TaskItem/TaskItem.jsx";

const TaskList = () => {
  return (
    <>
      <ListGroup>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ListGroup>
    </>
  );
};

export default TaskList;
