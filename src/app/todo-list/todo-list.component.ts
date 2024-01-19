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
  newTask= 'the task has not been created';
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
    this.newTask='task created'
  }
}
