import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostComponent } from '../post/post.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  posts:Post;
  CommentForm: FormGroup;


  constructor(private postService:PostService, private route:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{
      const id = +params.get('id')
      this.postService.getPost(id).subscribe(posts => {
        this.posts = posts;
      });
    })
    
    this.CommentForm = new FormGroup({
      comment: new FormControl('',[Validators.required]),
    })

  }

  CommentSubmit(){
    const comment = this.CommentForm.value
    console.log(comment)

    // this.postService.addPost(post).subscribe((data)=>{
    //   console.log(data)
    // },
    // (error)=>{
    //   console.log(error)
    // })
  }

} 
