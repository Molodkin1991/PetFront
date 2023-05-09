import { Component, OnInit } from '@angular/core';
import {IPet} from "./models/pet";
import {PetService} from "./service/pet.service";
import {ModalService} from "./service/modal.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private petService: PetService,
              public modalService: ModalService){
  }
  login=true;
  ngOnInit(): void {
    this.petService.getAll().subscribe(pet =>{
      this.pets=pet;
      console.log(pet)
    })
  }
  title = 'Pets';
  pets :IPet[]= []


}
