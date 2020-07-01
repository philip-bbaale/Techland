import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from '../../auth/auth.service';


import { User } from 'src/app/user';
import { Category } from '../../models/category'
import { userInfo } from 'os';
import { access } from 'fs';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  categories:Category[];
  currentUser: User;
  posts:Post;


  @Output() addPost: EventEmitter<any> = new EventEmitter();

  title: string;
  image: any;
  caption: string;
  category: number;
  PostForm: FormGroup;

  constructor(private fb:FormBuilder, private postService:PostService, private auth: AuthService, private route:ActivatedRoute) { }
  

  ngOnInit(): void {

    this.postService.getCategories().subscribe(categories => {
      this.categories = categories;
    });


    this.auth.currentUser.subscribe(x => {this.currentUser = x['user_id'] 
    console.log(this.currentUser)
    });
    
    this.PostForm = this.fb.group ({
      title: ['',[Validators.required]],
      image: ['',[Validators.required]],
      fileSource: ['', [Validators.required]],
      content: ['',[Validators.required]],
      category: ['',[Validators.required]],
      author: [this.currentUser,[Validators.required]],
    })
    
    this.route.paramMap.subscribe(params =>{
      const id = +params.get('id')
      this.postService.addToWishlist(id).subscribe(posts => {
        this.posts = posts;
      });
    })

  }

  get f(){
    return this.PostForm.controls;
  }

  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.PostForm.patchValue({
        fileSource: file
      });
    }
  }
  
  
  onSubmit(){
    const post = this.PostForm.value
    console.log(post)

    this.postService.addPost(post).subscribe((data)=>{
      console.log(data)
    },
    (error)=>{
      console.log(error)
    })
  }
  
  
}
