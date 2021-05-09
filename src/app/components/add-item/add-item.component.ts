import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from 'src/app/todo.interface';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  form:FormGroup;
  @Output() taskTitle$ = new EventEmitter(null);
  name: string;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  addTask() {
    if (this.form.valid){
      this.taskTitle$.emit(this.form.value.task);
      this.name ='';

    } else {
      alert("Please add more then 3 letters task")
    }
  }

}
