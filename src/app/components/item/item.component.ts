import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Todo;
  @Output() itemToDelete$ = new EventEmitter(null);

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(itemId) {
    this.itemToDelete$.emit(itemId);
  }

  toggleDone() {
    this.item.done = !this.item.done;
  }

}
