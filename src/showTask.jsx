import React, {useState} from 'react';
import Task from './Task.';
import {taskListHook}   from './App'
let ShowTask = function(){
    let tasks = taskListHook.map(function(task, index){
        return (
            <Task desc = {task} 
                index = {index}
            />
        );
    });
    return (
        tasks
    ) ;
}
export default ShowTask;