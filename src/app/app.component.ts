import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisExp';
  selectedOption: number;

  problemasDisco=[
    { id: 1, desc:'No se encontro disco duro', compas:'disco' },
    { id: 2, desc:'No se puede iniciar el sistema', compas:'disco' },
    { id: 3, desc:'No se puede leer ni escribir nada en el disco', compas:'disco' },
    { id: 4, desc:'Sonidos extraños al encender el equipo', compas:'CPU' },
    { id: 5, desc:'Sobrecalentamiento', compas:'CPU' },
    { id: 6, desc:'Se reinicia el computador', compas:'FDP' },
    { id: 7, desc:'Olor a quemado', compas:'FDP' },
    { id: 8, desc:'Pantallas Azules al encender el sistema', compas:'RAM' },
    { id: 9, desc:'Sonidos al encender el computador', compas:'RAM' }
  ]

  solucionesDisco =[

    [
    { id: 1, desc:'Al intentar encender el sistema pasa al BIOS y no arranca'}
    ],
    [
      { id: 2, desc:'Pantalla negra a la espera de instrucciones'},
      { id: 3, desc:'Pantalla negra a la espera de instrucciones'}
    ]
    
  ]

  soluciones = {
    sols : 
    [
      {
        id:1,
        desc : ''
      }
    ]

  } 

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
    console.log(this.selectedOption);
  }

  get descripciones()
  {
    if(this.selectedOption == 1)
    {
      return ['1','2']
    }
    return ['null'];
  }
}
