import { TestBed } from '@angular/core/testing';

import { RandomRecipesService } from './random-recipes.service';

describe('RandomRecipesService', () => {
  let service: RandomRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
