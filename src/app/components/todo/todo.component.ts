import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() dblclicked: EventEmitter<Todo> = new EventEmitter();

  public onDblclick(todo: Todo): void {
    this.dblclicked.emit(todo);
  }
}
