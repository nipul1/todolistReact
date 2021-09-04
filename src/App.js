import React, {useState} from 'react';
import AddTask from './AddTask';
import Header from './header';
import ShowTask from './showTask';

let [taskListHook, updateTaskListHook] = [['Bhagwan'], null]; 
let App = function(){
  if(!localStorage.getItem('todoList')){
    localStorage.setItem('todoList', JSON.stringify([]));
  }
  let json = JSON.parse(localStorage.getItem('todoList'));
  [taskListHook, updateTaskListHook]  = useState(json);
  return(
    <React.Fragment>
    <div className = 'centralBox'>
      <Header/>
      <div className = 'formdiv'>
        <AddTask/>
        <ShowTask/> 
      </div>
    </div>
    </React.Fragment>
  );
}
export default App;
export {taskListHook, updateTaskListHook}