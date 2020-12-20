import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service should return VI when input is 6', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    const response = service.romanNumerals(6);
    expect(response).toEqual('VI');
  });

  it('should return LXXVI when input is 76', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    const response = service.romanNumerals(76);
    expect(response).toEqual('LXXVI');
  });

  it('should return XIII when input is 13', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    const response = service.romanNumerals(13);
    expect(response).toEqual('XIII');
  });

  it('should return XLIV when input is 44', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    const response = service.romanNumerals(11);
    expect(response).toEqual('XI');
  });

  it('should return MMMCMXCIX when input is 3999', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    const response = service.romanNumerals(3999);
    expect(response).toEqual('MMMCMXCIX');
  });

  it('should return "" when input is 0', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    const response = service.romanNumerals(0);
    expect(response).toEqual("");
  });
});
