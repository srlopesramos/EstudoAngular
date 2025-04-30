import {TestBed} from '@angular/core/testing';

import {CalculadoraService} from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should be 1 + 4 = 5', () => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toBe(5);
  });

  it('Should be 1 - 4 = -3', () => {
    const subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(subtracao).toBe(-3);
  });

  it('Should be 5 / 2 = 2.5', () => {
    const divisao = service.calcular(5, 2, CalculadoraService.DIVISAO);
    expect(divisao).toBe(2.5);
  });

  it('Should be 8 * 2 = 16', () => {
    const divisao = service.calcular(8, 2, CalculadoraService.MULTIPLICACAO);
    expect(divisao).toBe(16);
  })

  it('Should be return 0 to invalid operation', () => {
    const operacaoInvalida = service.calcular(1, 2, 'nda');
    expect(operacaoInvalida).toBe(0);
  })

});
