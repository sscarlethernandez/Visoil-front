import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProductoComponent } from './formulario-producto.component';

describe('FormularioProductoComponent', () => {
  let component: FormularioProductoComponent;
  let fixture: ComponentFixture<FormularioProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioProductoComponent]
    });
    fixture = TestBed.createComponent(FormularioProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
