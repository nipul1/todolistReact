import  React, {useState} from 'react';
import {updateTaskListHook} from './App';
let AddTask = function(){
    let [toBeAddedTask, updateToBeAddedTask] = useState('');
    let addTaskFunction = function(event){
        // event.preventDefault();
        console.log("clicked");
        let items = localStorage.getItem('todoList');
        let taskList = JSON.parse(items);
        if(!taskList){
            taskList = [];
            console.log(typeof taskList)
        }
        taskList.push(toBeAddedTask);
        updateToBeAddedTask('');
        localStorage.setItem('todoList', JSON.stringify(taskList));
        updateTaskListHook(JSON.parse(localStorage.getItem('todoList')));
    }
    
    let onChangeCallback = function(event){
        console.log(event.target.value);
        updateToBeAddedTask(event.target.value);
    }
    return (
        <form action = 'submit' className = 'addTaskForm'>    
            <input type = 'text' className = 'inputField' placeholder = 'Enter Task Description'
                name = 'taskDesc'
                onChange = {onChangeCallback}
            />
            <button className = 'addTaskButton' 
                onClick = {addTaskFunction}
            >+</button>
        </form>
    );
}
export default AddTask;