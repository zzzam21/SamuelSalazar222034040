import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCComponent } from './second-c.component';

describe('SecondCComponent', () => {
  let component: SecondCComponent;
  let fixture: ComponentFixture<SecondCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
