import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisExp';
  
  problemasDisco=[
    { id: 1, desc:'No se encontro disco duro', compas:'disco' },
    { id: 2, desc:'No se puede iniciar el sistema', compas:'disco' },
    { id: 3, desc:'Disco duro corrupto', compas:'disco' }
  ]
  solucionesDisco =[
    { id: 1, desc:'Realizar restablecimiento completo', compas:'disco', sh:[]},
    { id: 2, desc:'Comprobar el estado fisico del disco', compas:'disco' },
    { id: 3, desc:'Restaurar configuracion predeterminada en el BIOS', compas:'disco',sh:[] },
    { id: 4, desc:'Realizar un inicio avanzado', compas:'disco', sh:[]},
    { id: 5, desc:'Realizar prueba de diagnostico del disco duro', compas:'disco', sh:[{id: 51, desc:'ejecutar EaseUS para eliminar sectores dañados'}, {id:52, desc:'Cambiar de disco', shh:[{id:521, desc:'Data recovery con stellar phoenix'},{id:522, desc:'Descartar Disco'}]}]}
  ]
  componentes =[
    { id: 1, nombre:'Unidad de almacenamiento' },
    { id: 2, nombre:'CPU' },
    { id: 3, nombre:'Fuente de poder' },
    { id: 4, nombre:'Memoria RAM' },
    { id: 5, nombre:'Motherboard' },
  ]

  
  constructor(private fb:FormBuilder){}
  myform=this.fb.group({
    problema:['', Validators.required]
  })
  getData(form){
    console.log(form.value);
  }
}
