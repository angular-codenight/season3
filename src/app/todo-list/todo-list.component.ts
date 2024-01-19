import {Component} from "@angular/core";


@Component({
  selector:'app-todo-list',
  // templateUrl:'todo-list.component.html',
  templateUrl:'todo-list.component.html',
  // styleUrls:['todo-list.component.scss']
  styles:[`
    .title{
      font-style: italic;
      color: green;
    }

  `]
})
export class TodoListComponent{
  allowNewTask=false;
  isDanger=false;
  taskCreated= 'the task has not been created';
  showNewTask=false;
  newTask='';
  newTaskTwoWay='task-two-way';
  constructor() {
    setTimeout(()=>{
      this.allowNewTask=true;
      this.isDanger=true
    },5000)
  }

  isAllowNewTask(){
    return this.allowNewTask;
  }

  addNewTask(){
    this.taskCreated='task created';
    this.showNewTask=true;
  }

  changeTaskName($event: any) {
    this.newTask=$event.target.value;
  }
}
