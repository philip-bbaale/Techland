import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router'; 


import { Post } from '../../models/post';
import { AuthService } from '../../auth/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts:Post[];
  currentUser: User;

  constructor(private postService:PostService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    }); 

    this.auth.currentUser.subscribe(x => {this.currentUser = x['user_id'] 
    });

  }

  addTodo(post:Post) {
    this.postService.addPost(post).subscribe(post => {
      this.posts.push(post);
    });
  }

  ViewuserDetail(post_id : any){
    let url: string = "/postDetail/" + post_id
         this.router.navigateByUrl(url);
      }

  addToWishlist(post : Post){

    this.postService.addToWishlist(post).subscribe((data)=>{
      console.log(data)
    },
    (error)=>{
      console.log(error)
    })
  }
}
