import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Post } from '../models/post'
import { Category } from '../models/category'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/posts/'
  categoryUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/categories/'

  constructor(private http:HttpClient) { 
  }
  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}`);

  }

  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(`${this.categoryUrl}`);

  }
}
