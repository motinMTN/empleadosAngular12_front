export interface Empleado {
  id?: string;
  nombre: string;
  apellido: string;
  correo: string;
  imagen: string;
  salario: number;
  created_at?: Date;
  updated_at?: Date;
}
