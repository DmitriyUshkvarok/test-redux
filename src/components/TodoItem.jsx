import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from 'redux/todoSlice';

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />
      <span>{text}</span>
      <span
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </span>
    </li>
  );
}
export default TodoItem;
