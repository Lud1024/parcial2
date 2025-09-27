type Bono = 'A1' | 'A2' | 'A3';

interface Empleado {
  productividad: number;  // P
  encargado: boolean;     // E
  infraccionGrave: number; // IG
}

export const calcularBonos = (empleado: Empleado): { A1: boolean, A2: boolean, A3: boolean } => {
  // Si hay infracción grave, eliminamos todos los bonos
  if (empleado.infraccionGrave >= 1) {
    return { A1: false, A2: false, A3: true };
  }

  const A1 = empleado.productividad >= 90;
  const A2 = empleado.encargado;

  return { A1, A2, A3: false };
};
