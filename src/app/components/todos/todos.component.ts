import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];
  private unsubscriber$ = new Subject<void>();

  public ngOnInit(): void {

  }
  
  public ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
