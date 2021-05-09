import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() taskDetails: Todo[] = [];
  @Output() itemToDelete$ = new EventEmitter(null);
  constructor() { }

  ngOnInit(): void {
  }

  removeItem(itemId){
    this.itemToDelete$.emit(itemId);
  }

}
