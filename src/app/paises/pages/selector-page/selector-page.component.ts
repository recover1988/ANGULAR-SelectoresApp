import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent {

  miFormulario: FormGroup = this.fb.group({
    region:['', Validators.required]
  })


  guardar() { }



  constructor(private fb: FormBuilder) { };
}
