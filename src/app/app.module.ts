import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ModalComponent } from './core/modal/modal.component';
import { PostListComponent } from './views/post-list/post-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    PostListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
