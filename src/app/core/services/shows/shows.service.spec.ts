import { TestBed } from '@angular/core/testing';

import { ShowsService } from './shows.service';

describe('ShowsService', () => {
  let service: ShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should delete html tags', () => {

    expect(service.getParsedDescrition('hola<p> soy un test')).toBe('hola soy un test')
  })

});
