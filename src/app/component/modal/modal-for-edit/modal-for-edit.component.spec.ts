import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForEditComponent } from './modal-for-edit.component';

describe('ModalForEditComponent', () => {
  let component: ModalForEditComponent;
  let fixture: ComponentFixture<ModalForEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalForEditComponent]
    });
    fixture = TestBed.createComponent(ModalForEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
