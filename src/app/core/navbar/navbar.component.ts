import { Component, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  renderer: Renderer2;
  inputText: string = '';

  constructor(private modal: ModalService, rendererFactory: RendererFactory2, private search: SearchService) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.modal.show = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  onInput(): void {
    this.search.searchKey.next(this.inputText);
  }

}
