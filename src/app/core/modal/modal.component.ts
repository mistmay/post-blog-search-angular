import { Component, ElementRef, OnInit, ViewChild, Renderer2, RendererFactory2 } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('asideModal') aside!: ElementRef;
  @ViewChild('containerModal') container!: ElementRef;
  renderer: Renderer2;
  form!: FormGroup;
  id: number = 0;

  constructor(private modalService: ModalService, rendererFactory: RendererFactory2, private formBuilder: FormBuilder, private postService: PostService) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      post: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getModalStatus(): boolean {
    return this.modalService.show;
  }

  clickOutsideModal(event: Event): void {
    if (event.target !== this.aside.nativeElement && event.target !== this.container.nativeElement) {
      return;
    } else {
      this.modalService.show = false;
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  resetForm(): void {
    this.form.reset();
  }

  addPost(): void {
    this.postService.addPost({ ...this.form.value, id: this.id });
    this.id++;
    this.form.reset();
    this.modalService.show = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

}
