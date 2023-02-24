import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
  });

  // llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];

  guardar() { };

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;

    // cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap((_) => this.miFormulario.get('pais')?.reset('')),
        switchMap(region => this.paisesServices.getPaisesPorRegion(region))
      )
      .subscribe(paises => this.paises = paises)



  }


  constructor(
    private fb: FormBuilder,
    private paisesServices: PaisesService,
  ) { };
}
// tap -> efectos secundarios
// map -> mutar informacion
// switchMap -> devolver otro observable

    // this.miFormulario.get('region')?.valueChanges
    //   .subscribe(region => {
    //     this.paisesServices.getPaisesPorRegion(region)
    //       .subscribe(paises => {
    //         console.log(paises)
    //         this.paises = paises
    //       })
    //   })
