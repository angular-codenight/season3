import {Component} from "@angular/core";


@Component({
  selector:'app-todo-list',
  // templateUrl:'todo-list.component.html',
  template:`
    <h3 class="title">
      todo list component2
    </h3>
    <app-todo-list-item></app-todo-list-item>
    <app-todo-list-item></app-todo-list-item>
    <app-todo-list-item></app-todo-list-item>
    <app-todo-list-item></app-todo-list-item>
  `,
  // styleUrls:['todo-list.component.scss']
  styles:[`
    .title{
      font-style: italic;
      color: green;
    }

  `]
})
export class TodoListComponent{}
