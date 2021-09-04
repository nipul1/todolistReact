import React from 'react';
import {updateTaskListHook} from './App'
let Task = function(props){
    let crossButton = function(event){
        console.log("prabhav")
        let taskList = JSON.parse(localStorage.getItem('todoList') || []);
        for(let i = 0; i < taskList.length; i++){
            if(props.index == i){
                console.log(i);
                taskList.splice(i, 1); 
            }
        }   
        localStorage.setItem('todoList', JSON.stringify(taskList));
        {updateTaskListHook(taskList)};
    }
    return (
        <div>
            <div className = 'taskItem'>
                <button className ='crossButton' onClick={crossButton}><img className = 'crossImg' src="./cross.jpg" alt="my image"/></button>
                <h1>{props.desc}</h1>
            </div>
        </div>
    );
}
export default Task;