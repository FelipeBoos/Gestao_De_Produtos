import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularEstrategiaPreco } from './simular-estrategia-preco';

describe('SimularEstrategiaPreco', () => {
  let component: SimularEstrategiaPreco;
  let fixture: ComponentFixture<SimularEstrategiaPreco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimularEstrategiaPreco],
    }).compileComponents();

    fixture = TestBed.createComponent(SimularEstrategiaPreco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
