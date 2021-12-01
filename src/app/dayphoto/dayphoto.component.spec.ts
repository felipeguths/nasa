import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayphotoComponent } from './dayphoto.component';

describe('DayphotoComponent', () => {
  let component: DayphotoComponent;
  let fixture: ComponentFixture<DayphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
