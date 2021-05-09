import { SafeMethodCall } from '@angular/compiler';
import { Component } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDoApp';
  taskDetails:Todo[] =[];

  constructor() {
    this.taskDetails = localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))] : [];
  }

  saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.taskDetails))
  }

  setItem(event) {
    this.taskDetails.push({
      id: Math.random().toString(36).substr(2, 9),
      title: event,
      done: false
    });
    this.saveToLocalStorage();
  }

  removeFromList(itemId) {
    this.taskDetails = this.taskDetails.filter((item: Todo)=> {
      if(item.id != itemId){
        return true;
      }
    });
    this.saveToLocalStorage();
  }
}
