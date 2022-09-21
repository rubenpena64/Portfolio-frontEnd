import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleTxFormComponent } from './triple-tx-form.component';

describe('TripleTxFormComponent', () => {
  let component: TripleTxFormComponent;
  let fixture: ComponentFixture<TripleTxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripleTxFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripleTxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
