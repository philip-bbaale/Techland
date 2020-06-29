import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostComponent } from '../post/post.component'

import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  posts:Post;

  constructor(private postService:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id = +params.get('id')
      this.postService.getPost(id).subscribe(posts => {
        this.posts = posts;
      });

    })
    
  }

}
