import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalService} from "../../service/modal.service";
import {PetService} from "../../service/pet.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private petService: PetService,
              private modalService:ModalService){}

  form = new FormGroup({
    name:new FormControl('',Validators.required),
    code:new FormControl('',Validators.required),
    petType:new FormControl('',Validators.required),
    furColor:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }
  submit(){
    this.petService.create(this.form.getRawValue()).subscribe(()=>{
      this.modalService.close()
    })

    console.log(this.form.value)
  }
  get formCont(){
    return this.form.controls
  }
}
