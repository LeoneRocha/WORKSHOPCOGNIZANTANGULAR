import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucomponentedecoratorComponent } from './meucomponentedecorator.component';

describe('MeucomponentedecoratorComponent', () => {
  let component: MeucomponentedecoratorComponent;
  let fixture: ComponentFixture<MeucomponentedecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeucomponentedecoratorComponent]
    });
    fixture = TestBed.createComponent(MeucomponentedecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
