import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './component/pets/pets.component';
import { ModalComponent } from './component/modal/modal.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import {HttpClientModule} from "@angular/common/http";
import { ModalForEditComponent } from './component/modal/modal-for-edit/modal-for-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    ModalComponent,
    CreateComponent,
    EditComponent,
    ModalForEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

