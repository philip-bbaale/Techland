import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  @Output() addPost: EventEmitter<any> = new EventEmitter();

  title: string;
  image: any;
  caption: string;
  category: string;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const post ={
      title: this.title,
      image: this.image,
      caption: this.caption,
      category: this.category,
    }

    this.addPost.emit(post);

  }
}
