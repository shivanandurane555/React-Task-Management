import { ListGroupItem, Button } from "reactstrap";
const TaskItem = () => {
  return (
    <>
      <ListGroupItem>
        Task 1
        <Button close />
      </ListGroupItem>
    </>
  );
};

export default TaskItem;
