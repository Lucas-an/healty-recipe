import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipeComponent } from './single-recipe.component';

describe('SingleRecipeComponent', () => {
  let component: SingleRecipeComponent;
  let fixture: ComponentFixture<SingleRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRecipeComponent]
    });
    fixture = TestBed.createComponent(SingleRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
