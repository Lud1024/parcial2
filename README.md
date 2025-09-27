# Tabla de Decisiones

Esta tabla describe las combinaciones de las condiciones para la asignación de bonos a empleados.

| Regla | P ≥ 90 | E (Encargado) | IG ≥ 1 (Infracción Grave) | A1 (Bono Productividad) | A2 (Bono Encargado) | A3 (Eliminar Bonos) |
|-------|--------|---------------|---------------------------|-------------------------|---------------------|---------------------|
| **R1** | No     | No            | No                        | No                      | No                  | No                  |
| **R2** | Sí     | No            | No                        | Sí                      | No                  | No                  |
| **R3** | No     | Sí            | No                        | No                      | Sí                  | No                  |
| **R4** | Sí     | Sí            | No                        | Sí                      | Sí                  | No                  |
| **R5** | No     | No            | Sí                        | No                      | No                  | Sí                  |
| **R6** | Sí     | No            | Sí                        | No                      | No                  | Sí                  |
| **R7** | No     | Sí            | Sí                        | No                      | No                  | Sí                  |
| **R8** | Sí     | Sí            | Sí                        | No                      | No                  | Sí                  |

## Explicación:

- **P**: Puntuación de productividad mensual (0-100).
- **E**: Si el empleado es encargado (Sí/No).
- **IG**: Número de infracciones graves (0 o 1+).
- **A1**: Bono de productividad (Sí/No).
- **A2**: Bono de encargado (Sí/No).
- **A3**: Eliminar bonos del mes (Sí/No).

### Notas:
- Si **A3** = Sí (Eliminar bonos), entonces **A1** y **A2** son **No**, independientemente de otras condiciones.

# Conjunto Mínimo de Casos de Prueba

Este conjunto de casos de prueba cubre todas las combinaciones de clases de equivalencia y valores límite. Las pruebas están diseñadas para evaluar la lógica de asignación de bonos según la puntuación de productividad, si el empleado es encargado, y si ha cometido infracciones graves.

## Casos de Prueba

### **1. Caso de prueba 1 (Valor límite inferior de Productividad)**

- **Entrada:**
  - P = 89 (límite inferior de CE1)
  - E = No
  - IG = 0
- **Clase de equivalencia:**
  - **P**: CE1 (No altamente productivo)
  - **E**: CE3 (No encargado)
  - **IG**: CE5 (Sin infracción)
- **Descripción:** Prueba en el límite inferior de la productividad.
- **Resultado esperado:** No se asignan bonos de productividad ni de encargado. No se eliminan bonos.

### **2. Caso de prueba 2 (Valor límite superior de Productividad)**

- **Entrada:**
  - P = 90 (límite de CE2)
  - E = No
  - IG = 0
- **Clase de equivalencia:**
  - **P**: CE2 (Altamente productivo)
  - **E**: CE3 (No encargado)
  - **IG**: CE5 (Sin infracción)
- **Descripción:** Prueba en el límite superior de productividad.
- **Resultado esperado:** Se asigna bono de productividad, pero no el de encargado.

### **3. Caso de prueba 3 (Empleado encargado, sin infracción)**

- **Entrada:**
  - P = 75
  - E = Sí
  - IG = 0
- **Clase de equivalencia:**
  - **P**: CE1 (No altamente productivo)
  - **E**: CE4 (Encargado)
  - **IG**: CE5 (Sin infracción)
- **Descripción:** Empleado no altamente productivo pero encargado, sin infracción.
- **Resultado esperado:** Se asigna bono de encargado, pero no el de productividad.

### **4. Caso de prueba 4 (Empleado altamente productivo y encargado)**

- **Entrada:**
  - P = 95
  - E = Sí
  - IG = 0
- **Clase de equivalencia:**
  - **P**: CE2 (Altamente productivo)
  - **E**: CE4 (Encargado)
  - **IG**: CE5 (Sin infracción)
- **Descripción:** Empleado altamente productivo y encargado, sin infracción.
- **Resultado esperado:** Se asignan ambos bonos: productividad y encargado.

### **5. Caso de prueba 5 (Empleado con infracción grave, no importa el resto)**

- **Entrada:**
  - P = 85
  - E = Sí
  - IG = 1 (infracción grave)
- **Clase de equivalencia:**
  - **P**: CE1 (No altamente productivo)
  - **E**: CE4 (Encargado)
  - **IG**: CE6 (Con infracción)
- **Descripción:** Empleado con infracción grave, no importa la productividad ni si es encargado.
- **Resultado esperado:** Se eliminan todos los bonos (A3 = Sí).

### **6. Caso de prueba 6 (Valor límite inferior de Infracción Grave)**

- **Entrada:**
  - P = 70
  - E = No
  - IG = 0
- **Clase de equivalencia:**
  - **P**: CE1 (No altamente productivo)
  - **E**: CE3 (No encargado)
  - **IG**: CE5 (Sin infracción)
- **Descripción:** Caso donde no hay infracción, el empleado no es encargado ni altamente productivo.
- **Resultado esperado:** No se asignan bonos de productividad ni de encargado. No se eliminan bonos.

### **7. Caso de prueba 7 (Valor límite superior de Infracción Grave)**

- **Entrada:**
  - P = 80
  - E = No
  - IG = 1
- **Clase de equivalencia:**
  - **P**: CE1 (No altamente productivo)
  - **E**: CE3 (No encargado)
  - **IG**: CE6 (Con infracción)
- **Descripción:** Caso donde hay infracción grave (IG ≥ 1).
- **Resultado esperado:** Todos los bonos se eliminan debido a la infracción grave (A3 = Sí).

---

### **Resumen de Casos de Prueba**

| Caso | P  | E   | IG  | Descripción                                           | Resultado Esperado               |
|------|----|-----|-----|-------------------------------------------------------|----------------------------------|
| 1    | 89 | No  | 0   | Límite inferior de Productividad                      | Sin bonos asignados              |
| 2    | 90 | No  | 0   | Límite superior de Productividad                      | Bono de productividad asignado  |
| 3    | 75 | Sí  | 0   | Empleado encargado sin infracción                     | Bono de encargado asignado      |
| 4    | 95 | Sí  | 0   | Empleado altamente productivo y encargado             | Bonos de productividad y encargado asignados |
| 5    | 85 | Sí  | 1   | Empleado con infracción grave                         | Todos los bonos eliminados      |
| 6    | 70 | No  | 0   | Empleado sin infracción ni ser encargado              | Sin bonos asignados              |
| 7    | 80 | No  | 1   | Empleado con infracción grave                         | Todos los bonos eliminados      |

---

Este conjunto de casos de prueba asegura que todas las combinaciones de clases de equivalencia y valores límite sean evaluadas correctamente. Cubre los límites y las condiciones que afectan la asignación de bonos según la puntuación de productividad, el rol de encargado, y las infracciones graves.
