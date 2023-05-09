import { Component } from '@angular/core';
import {PetService} from "../../service/pet.service";
import {ModalService} from "../../service/modal.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private petService: PetService,
              private modalService:ModalService){}

  form = new FormGroup({
    name:new FormControl('', Validators.required),
    code:new FormControl('',Validators.required),
    petType:new FormControl('',Validators.required),
    furColor:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }
  edit(){
    this.petService.edit(this.form.getRawValue() ).subscribe(()=>{
      this.modalService.close()
    })
    console.log(this.form.value)
  }
  get formCont(){
    return this.form.controls
  }
}
