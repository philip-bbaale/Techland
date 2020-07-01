import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from '../auth/auth.service';


import { Post } from '../models/post'
import { Category } from '../models/category'
import { Wishlist } from '../models/wishlist'
import { Comment } from '../models/comment'
import { User } from 'src/app/user';
import { Profile } from '../models/profile'



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
  createPostUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/posts/create'
  categoryUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/categories/'
  deleteCategoryUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/categories'
  makeComment:string = 'https://techlandjarvis.herokuapp.com/api/comments/create/'
  wishlistUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/wishlist/'
  getUserUrl:string = 'https://techlandjarvis.herokuapp.com/auth/api/profiles/'
  getUserPostsUrl:string = 'https://techlandjarvis.herokuapp.com/posts/api/userpost/'

  currentUser: User;

  constructor(private http:HttpClient, private auth: AuthService) { 
  }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}`);
  }
  getPost(post_id : any):Observable<Post> {
    return this.http.get<Post>(`${this.postUrl}${post_id}`);
  }

  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(this.createPostUrl, post, httpOptions);
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

  addToWishlist(post_id) :Observable<Post>{
    this.auth.currentUser.subscribe(x => {this.currentUser = x['user_id'] 
    });
    const url = `${this.wishlistUrl}${this.currentUser}`;
    return this.http.put<Post>(url, post_id, httpOptions);
  }

  getWishlists():Observable<Post[]> {
    this.auth.currentUser.subscribe(x => {this.currentUser = x['user_id'] 
    });
    return this.http.get<Post[]>(`${this.wishlistUrl}${this.currentUser}`);
  }

  addComment(comment:Comment):Observable<Comment> {
    return this.http.post<Comment>(this.makeComment,comment, httpOptions);
  }

  getProfile(profile:Profile):Observable<Profile> {
    this.auth.currentUser.subscribe(x => {this.currentUser = x['user_id'] 
    });
    return this.http.get<Profile>(`${this.getUserUrl}${this.currentUser}/`);
  }

  getUserPosts():Observable<Post[]> {
    this.auth.currentUser.subscribe(x => {this.currentUser = x['user_id'] 
    });
    return this.http.get<Post[]>(`${this.getUserPostsUrl}${this.currentUser}`);
  }
}
