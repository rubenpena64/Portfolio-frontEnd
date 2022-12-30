import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaFormComponent } from './desa-form.component';

describe('DesaFormComponent', () => {
  let component: DesaFormComponent;
  let fixture: ComponentFixture<DesaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
