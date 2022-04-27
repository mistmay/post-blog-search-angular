import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  searchFilter: string = '';

  constructor(private postService: PostService, private search: SearchService) { }

  ngOnInit(): void {
    if (localStorage['postList']) {
      this.postService.postList = JSON.parse(localStorage.getItem('postList') || "");
      this.postService.postObservable.next(this.postService.postList);
    }
    this.postService.getPosts()
      .subscribe((res: Post[]) => {
        this.posts = res;
        localStorage.setItem('postList', JSON.stringify(res));
      });
    this.search.searchKey.subscribe((val: string) => {
      this.searchFilter = val;
    });
  }

  cancelPost(id: number) {
    this.postService.deletePost(id);
  }

}
