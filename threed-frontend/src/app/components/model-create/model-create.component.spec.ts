import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCreateComponent } from './model-create.component';

describe('ModelCreateComponent', () => {
  let component: ModelCreateComponent;
  let fixture: ComponentFixture<ModelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
