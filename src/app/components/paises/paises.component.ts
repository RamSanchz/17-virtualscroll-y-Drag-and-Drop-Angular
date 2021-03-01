import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
})
export class PaisesComponent implements OnInit {
  paises: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((paises) => (this.paises = paises));
  }

  // Recibimos el evento drop
  drop(event: CdkDragDrop<any>): void {
    /* esta funcion nos permite mover elementos dentro del la lista y replazar el valor, arreglo ,
    lugar donde se encontraba, lugar al cual se movio */
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
  }
}
