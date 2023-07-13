import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucomponentetwoawayComponent } from './meucomponentetwoaway.component';

describe('MeucomponentetwoawayComponent', () => {
  let component: MeucomponentetwoawayComponent;
  let fixture: ComponentFixture<MeucomponentetwoawayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeucomponentetwoawayComponent]
    });
    fixture = TestBed.createComponent(MeucomponentetwoawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
