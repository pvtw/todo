import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  @Output() submitted: EventEmitter<Todo> = new EventEmitter();

  public title: string = "";
  public completed: boolean = false;

  public onSubmit(): void {
    const todo: Todo = {
      id: Math.floor(Math.random() * 100000),
      title: this.title,
      completed: this.completed
    };

    this.submitted.emit(todo);

    this.clearForm();
  }

  private clearForm(): void {
    this.title = "";
    this.completed = false;
  }
}
