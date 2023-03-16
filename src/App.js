import React, { useState } from 'react'
import './App.css';

function ToDo(props) {
  const {obj, todoValue, setTodoValue} = props;
  return (<tr>
    <td>
      <p>{obj.id}</p>
    </td>
    <td>
      <input value={todoValue} onChange={(event) => setTodoValue(event.target.value)}/>
    </td>
    <td>
      <p>{obj.createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todoValue1, setTodoValue1] = useState('');
  const [todoValue2, setTodoValue2] = useState('');
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  const [reverse, setReverse] = useState(true);

  return (
    <div id="main">
      <button onClick={() => setReverse(!reverse)}>Reverse</button>
      <table>
        <tbody>
          {reverse ?  <ToDo obj={todos[0]} todoValue={todoValue1} setTodoValue={setTodoValue1}/> : <ToDo obj={todos[1]} todoValue={todoValue2} setTodoValue={setTodoValue2}/>}
          {reverse ? <ToDo obj={todos[1]} todoValue={todoValue2} setTodoValue={setTodoValue2}/> : <ToDo obj={todos[0]} todoValue={todoValue1} setTodoValue={setTodoValue1}/>}
        </tbody>
      </table>
    </div>
  )
}


export default App;