import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucomponenteonewayComponent } from './meucomponenteoneway.component';

describe('MeucomponenteonewayComponent', () => {
  let component: MeucomponenteonewayComponent;
  let fixture: ComponentFixture<MeucomponenteonewayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeucomponenteonewayComponent]
    });
    fixture = TestBed.createComponent(MeucomponenteonewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
