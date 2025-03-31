# M6-ANGULAR-RETO

# Reto: Aplicación de Gestión de Cuentas Bancarias con Angular

> **Larry M. Ramírez - Coach Técnico**

> **Jacobo Garcés - Coach Técnico**

## Objetivo.

Crear una aplicación Angular 16 que sirva como portal de usuario para el sistema de gestión de cuentas bancarias. La aplicación debe consumir el servicio de back-end (desarrollado en el módulo Spring Boot) para mostrar y actualizar la información de las cuentas, permitiendo a los usuarios consultar saldos, ver el historial de transacciones y realizar operaciones bancarias.

## Requerimientos Principales

1. **Autenticación y Protección de Rutas:**

- Implementar un sistema de autenticación básico (puede ser simulado) que permita el login de usuarios.
- Proteger rutas sensibles usando **route guards** para que solo usuarios autenticados puedan acceder a ciertas secciones (por ejemplo, consulta de cuentas y transacciones).

2. **Modularización y Rutas:**

- Organizar la aplicación en módulos funcionales, por ejemplo:
  - **DashboardModule:** Vista general con información resumida.
  - **CuentasModule:** Módulo para consultar y gestionar cuentas.
  - **TransaccionesModule:** Módulo para visualizar el historial y realizar operaciones (depósitos, retiros, etc.).
- Configurar **Lazy Loading** para cargar módulos de forma diferida y optimizar el rendimiento.

3. **Interfaz de Usuario:**

- Defiinir una **landing page** que sirva como punto de acceso principal a la aplicación.
- Crear componentes reutilizables para mostrar información clave, como:
  - Tarjetas o "cards" para representar el estado de una cuenta.
  - Listados de transacciones.
  - Formularios de operación (depósito, retiro) con **formularios reactivos** y validaciones.
- Utilizar **directivas** y **pipes** para mejorar la presentación de los datos.

4. **Consumo de APIs REST:**

- Utilizar el **HTTPClient** para consumir los endpoints del back-end, integrando:
  - Consulta del saldo de la cuenta.
  - Registro de operaciones (depósitos, retiros, etc.).
  - Obtención del historial de las últimas 5 transacciones.
- Gestionar errores en la comunicación con la API y mostrar mensajes de error adecuados.

5. **Gestión de Estado Global:**

- Implementar un mecanismo para gestionar el estado de autenticación y los datos de la cuenta a lo largo de la aplicación.
- Permitir que, al actualizar una operación, la información se refleje inmediatamente en la interfaz.

**Nota:** este reto debe entregarse por medio de una presentación de máximo 5 minutos durante la sesión del dia 27 de marzo de 2025. Como es costumbre, es necesario el un Pull Request correspondiente desde el repositorio Fork hacia la rama main del repositorio del reto.
