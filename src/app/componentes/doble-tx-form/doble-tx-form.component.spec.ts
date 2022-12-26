import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleTxFormComponent } from './doble-tx-form.component';

describe('DobleTxFormComponent', () => {
  let component: DobleTxFormComponent;
  let fixture: ComponentFixture<DobleTxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobleTxFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DobleTxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
