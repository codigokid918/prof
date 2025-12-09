import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mercadorias } from './mercadorias';

describe('Mercadorias', () => {
  let component: Mercadorias;
  let fixture: ComponentFixture<Mercadorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mercadorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mercadorias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
