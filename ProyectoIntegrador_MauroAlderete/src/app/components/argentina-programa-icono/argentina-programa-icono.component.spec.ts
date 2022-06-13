import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgentinaProgramaIconoComponent } from './argentina-programa-icono.component';

describe('ArgentinaProgramaIconoComponent', () => {
  let component: ArgentinaProgramaIconoComponent;
  let fixture: ComponentFixture<ArgentinaProgramaIconoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgentinaProgramaIconoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgentinaProgramaIconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
