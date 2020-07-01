import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Profile } from '../../models/profile';
import { Post } from '../../models/post';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:Profile;
  posts:Post[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getProfile(this.profile).subscribe(profile => {
      this.profile = profile;
      console.log(profile)
    });

    this.postService.getUserPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts)
    }); 

  }


  
}
