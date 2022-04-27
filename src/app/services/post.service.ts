import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList: Post[] = [];
  postObservable = new BehaviorSubject<Post[]>([]);

  constructor() { }

  getPosts() {
    return this.postObservable;
  }

  addPost(post: Post): void {
    this.postList.push(post);
    this.postObservable.next(this.postList);
  }

  deletePost(id: number): void {
    this.postList.map((element: Post, index: number) => {
      if (element.id === id) {
        this.postList.splice(index, 1);
      }
    });
    this.postObservable.next(this.postList);
  }

}
