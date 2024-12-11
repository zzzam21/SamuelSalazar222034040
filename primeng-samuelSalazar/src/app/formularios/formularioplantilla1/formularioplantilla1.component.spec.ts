import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularioplantilla1Component } from './formularioplantilla1.component';

describe('Formularioplantilla1Component', () => {
  let component: Formularioplantilla1Component;
  let fixture: ComponentFixture<Formularioplantilla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formularioplantilla1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formularioplantilla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
