import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PetComponent} from './pet.component';
import {PetListComponent} from './pet-list.component';
import { FosterRequestDirective } from './fosterRequest.directive';
 import { CategoryListPipe } from './category-list.pipe';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    PetComponent,
    PetListComponent,
    FosterRequestDirective,
    CategoryListPipe

    
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule {}