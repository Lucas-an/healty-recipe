import { TestBed } from '@angular/core/testing';

import { SingleRecipeService } from './single-recipe.service';

describe('SingleRecipeService', () => {
  let service: SingleRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
