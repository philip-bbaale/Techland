import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Category } from '../../models/category'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories:Category[];
  categoryForm: FormGroup;
  DeleteCategoryForm: FormGroup;  

  constructor(private postService:PostService, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.categoryForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
    })

    this.DeleteCategoryForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
    })

    this.postService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit(){
    const category = this.categoryForm.value
    console.log(category)

    this.postService.addCategory(category).subscribe((data)=>{
      console.log(data)
    },
    (error)=>{
      console.log(error)
    })
  }

  deleteCategorySubmit(){
    const category = this.DeleteCategoryForm.value
    console.log(category)
    this.postService.deleteCategory(category).subscribe((data)=>{
      console.log(data)
    },
    (error)=>{
      console.log(error)
    })
  }

}
