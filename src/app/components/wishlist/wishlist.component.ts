import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/post';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  posts:Post[];

  constructor(private postService:PostService,) { }

  ngOnInit(): void {
    this.postService.getWishlists().subscribe(posts => {
      this.posts = posts;
      console.log(posts)
    }); 
  }

}
