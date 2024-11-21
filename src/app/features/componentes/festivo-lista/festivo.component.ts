import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modules/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FestivosService } from '../../servicios/festivos.service';
import { festivo } from '../../../core/entidades/festivo';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-festivo-lista',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
    NgIf
  ],
  templateUrl: './festivo.component.html',
  styleUrl: './festivo.component.css'
})
export class FestivoComponent {

  public mensaje: string = "";
  public anio: number = 0;
  public anioV: number = 0;
  public mes: number = 0;  // Inicializa el mes en 0
  public dia: number = 0;  // Inicializa el día en 0
  public mostrarTabla: boolean = false;
  public festivos: festivo[] = []; // Cambiar a minúscula por consistencia
  public columnas = [
    { name: "Día festivo", prop: "dia" },
    { name: "Mes de festivo", prop: "mes" },
    { name: "Festivos", prop: "nombre" },
  ];
  public modoColumna = ColumnMode;

  constructor(private festivoServicio: FestivosService) {
    this.listar();
  }

  public listar() {
    if (!this.anio) {
      alert('Por favor ingresa un año válido.');
      return;
    }
    this.festivoServicio.listar(this.anio).subscribe({
      next: (response) => {
        this.festivos = response;
        this.mostrarTabla = true; // Mostrar la tabla después de cargar los datos
      },
      error: () => {
        alert('Hubo un error al consultar los festivos.');
        this.mostrarTabla = false;
      },
    });
  }

  public verificar() {
    if (!this.anioV || !this.mes || !this.dia) {
      this.mensaje = 'Por favor ingresa un año, mes y día válidos.';
      return;
    }
  
    this.festivoServicio.verificar(this.anioV, this.mes, this.dia).subscribe({
      next: (response: string) => {
        this.mensaje = response;
      },
      error: (err) => {
        console.error('Error en la consulta:', err);
        this.mensaje = 'Hubo un error al consultar la API.';
      },
    });
  }
  
  
}
