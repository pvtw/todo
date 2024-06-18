import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl: string = "http://localhost:5000/todos";

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  public add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions);
  }

  public update(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  public delete(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
