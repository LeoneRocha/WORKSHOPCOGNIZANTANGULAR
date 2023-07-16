import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private apiUrl = 'https://localhost:7286/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPost(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  addPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, post);
  }

  deletePost(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
