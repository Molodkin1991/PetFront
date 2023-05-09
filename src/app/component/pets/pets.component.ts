import {Component, Input} from '@angular/core';
import {IPet} from "../../models/pet";
import {ModalService} from "../../service/modal.service";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
  constructor(public modalService: ModalService) {
  }
  @Input() pets: IPet

}
