import { calcularBonos } from '../src/bonoCalculator';

describe('Calcular Bonos', () => {

  test('Si el empleado tiene infracción grave, se eliminan todos los bonos', () => {
    const empleado = { productividad: 80, encargado: false, infraccionGrave: 1 };
    const result = calcularBonos(empleado);
    expect(result.A1).toBe(false);
    expect(result.A2).toBe(false);
    expect(result.A3).toBe(true);
  });

  test('Si la puntuación de productividad es mayor o igual a 90, se asigna bono de productividad', () => {
    const empleado = { productividad: 90, encargado: false, infraccionGrave: 0 };
    const result = calcularBonos(empleado);
    expect(result.A1).toBe(true);
    expect(result.A2).toBe(false);
    expect(result.A3).toBe(false);
  });

  test('Si es encargado, se asigna bono de encargado', () => {
    const empleado = { productividad: 85, encargado: true, infraccionGrave: 0 };
    const result = calcularBonos(empleado);
    expect(result.A1).toBe(false);
    expect(result.A2).toBe(true);
    expect(result.A3).toBe(false);
  });

  test('Si es encargado y tiene una buena puntuación de productividad, se asignan ambos bonos', () => {
    const empleado = { productividad: 95, encargado: true, infraccionGrave: 0 };
    const result = calcularBonos(empleado);
    expect(result.A1).toBe(true);
    expect(result.A2).toBe(true);
    expect(result.A3).toBe(false);
  });

  test('Si la puntuación es baja y no es encargado, no se asigna bono de productividad ni de encargado', () => {
    const empleado = { productividad: 80, encargado: false, infraccionGrave: 0 };
    const result = calcularBonos(empleado);
    expect(result.A1).toBe(false);
    expect(result.A2).toBe(false);
    expect(result.A3).toBe(false);
  });
});
