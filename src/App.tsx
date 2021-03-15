import React,{Fragment,useState} from 'react';
import './App.css';
import {Form,Input,Button} from 'reactstrap';
import Buttonn from './Button/Button';
import Search from './Search/Search';
type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo{
  text: string
  complete:boolean
}

function App():JSX.Element{

  const[value,setValue] = useState<string>('');
  const[todos,setTodos] = useState<ITodo[]>([]);
  const handleSubmit = (e:FormElem):void =>{
    e.preventDefault();
    addTodo(value);
    setValue('');
  }
const addTodo = (text:string):void=>{
  const newTodos: ITodo[] = [...todos,{text,complete:false}]
  setTodos(newTodos)
}

const completeTodo = (index:number):void=>{
  const newTodos:ITodo[] = [...todos]
  newTodos[index].complete=!newTodos[index].complete
  setTodos(newTodos)
}

const removeTodo = (index:number):void =>{
  const newTodos:ITodo[] = [...todos];
  newTodos.splice(index,1)
  setTodos(newTodos)
}

console.log(todos);
  return (
    <Fragment>
        <Search/>
        <Buttonn/>
      <div style={{margin:"250px",}}>
          <h1>To Do List</h1>
          <Form onSubmit={handleSubmit}>
              <Input type="text" value={value}
              onChange={e=>setValue(e.target.value)} required/>
              <br/>
              <Button type="submit">Add To Do</Button>
          </Form>
          <section>
            {todos.map((todo:ITodo, index:number) => (
            <Fragment key={index}>
                <div style={{textDecoration:todo.complete?"line-through" : ""}}>{todo.text}</div>
                <Button type="button" onClick={():void=>completeTodo(index)}>
                  {todo.complete?'Incomplete':'Complete'}</Button>
                  <Button style={{margin:"10px"}}type="button" onClick={()=>removeTodo(index)}>&times;</Button>
            </Fragment>
            ))}
          </section>
        </div>
    </Fragment>
  );
}

export default App;
