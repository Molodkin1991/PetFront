import { Component } from '@angular/core';
import {ModalService} from "../../../service/modal.service";

@Component({
  selector: 'app-modal-for-edit',
  templateUrl: './modal-for-edit.component.html',
  styleUrls: ['./modal-for-edit.component.css']
})
export class ModalForEditComponent {
  constructor(public modalService: ModalService){}
  ngOnInit(){

  }
}
