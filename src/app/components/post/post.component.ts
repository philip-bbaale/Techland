import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router'; 


import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts:Post[];

  constructor(private postService:PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
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
}
