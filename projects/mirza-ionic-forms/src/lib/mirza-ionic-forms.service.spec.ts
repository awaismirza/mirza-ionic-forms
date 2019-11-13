import { TestBed } from '@angular/core/testing';

import { MirzaIonicFormsService } from './mirza-ionic-forms.service';

describe('MirzaIonicFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MirzaIonicFormsService = TestBed.get(MirzaIonicFormsService);
    expect(service).toBeTruthy();
  });
});
