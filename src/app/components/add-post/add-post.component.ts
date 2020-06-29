import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

import { Category } from '../../models/category'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  categories:Category[];


  @Output() addPost: EventEmitter<any> = new EventEmitter();

  title: string;
  image: any;
  caption: string;
  category: number;
  PostForm: FormGroup;

  constructor(private fb:FormBuilder, private postService:PostService) { }

  

  ngOnInit(): void {

    this.postService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.PostForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      file: new FormControl('',[Validators.required]),
      fileSource: new FormControl('', [Validators.required]),
      content: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      author: new FormControl('admin',[Validators.required]),
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
