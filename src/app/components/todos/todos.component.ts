import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { Subject, takeUntil } from 'rxjs';
import { TodoComponent } from '../todo/todo.component';
import { NgFor } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    TodoComponent,
    TodoFormComponent,
    NgFor,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];
  private unsubscriber$ = new Subject<void>();

  constructor(
    private readonly todoService: TodoService,
  ) {}

  public ngOnInit(): void {
    this.getTodos();
  }
  
  public ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  public addTodo(todo: Todo): void {
    this.todoService.add(todo)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((t: Todo) => {
         this.todos.push(t);
    });
  }

  public toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.update(todo)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe();
  }

  private getTodos(): void {
    this.todoService.getAll()
    .pipe(takeUntil(this.unsubscriber$))
    .subscribe((todos) => {
        this.todos = todos
    });
  }
}
