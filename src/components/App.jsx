import { useState } from 'react';
import TodoList from './TodoList';
import InputField from './InputField';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todoSlice';

function App() {
  const [text, setText] = useState([]);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <>
      <InputField handleInput={setText} text={text} handleSubmit={addTask} />
      <TodoList />
    </>
  );
}
export default App;
