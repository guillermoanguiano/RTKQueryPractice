import { useCreateTaskMutation } from "../api/apiSlice";

export const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;

    // const { name, description, checked } = e.target.elements;
    createTask({ name, description, completed });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="description" />
      <input type="checkbox" name="completed" />

      <button>Add Task</button>
    </form>
  );
};