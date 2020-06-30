import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Post } from '../models/post'
import { Category } from '../models/category'
import { Wishlist } from '../models/wishlist'


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
  deleteCategoryUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/categories'
  makeComment:string = 'https://techlandjarvis.herokuapp.com/api/comments/create/'
  wishlistUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/wishlist/'

  constructor(private http:HttpClient) { 
  }
  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}`);
  }
  getPost(post_id : any):Observable<Post> {
    return this.http.get<Post>(`${this.postUrl}${post_id}`);
  }

  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(`${this.categoryUrl}`);
  }

  addCategory(category:Category):Observable<Category[]> {
    return this.http.post<Category[]>(this.categoryUrl, category, httpOptions);
  }

  deleteCategory(category:Category):Observable<Category> {
    const url = `${this.deleteCategoryUrl}/${category.id}/`;
    return this.http.delete<Category>(url, httpOptions);
  }

  addToWishlist(wishlist:Wishlist):Observable<Wishlist> {
    return this.http.post<Wishlist>(this.wishlistUrl, wishlist, httpOptions);
  }

  addComment() {
    return this.http.post(this.makeComment, httpOptions);
  }

}
