import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  isVisible$= new BehaviorSubject<boolean>(false)
  isVisibleEdit$= new BehaviorSubject<boolean>(false)


  open(){
    this.isVisible$.next(true)
  }
  close(){
    this.isVisible$.next(false)
  }
  openEdit(){
    this.isVisibleEdit$.next(true)
  }
  closeEdit(){
    this.isVisibleEdit$.next(false)
  }
}
