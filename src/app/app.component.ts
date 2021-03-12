import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisExp';
  selectedOption: number = 0;
  selectedDesc : number = 0;

  problemasDisco=[
    { id: 0, desc:'No se encontro disco duro', compas:'disco' },
    { id: 1, desc:'No se puede iniciar el sistema', compas:'disco' },
    { id: 2, desc:'No se puede leer ni escribir nada en el disco', compas:'disco' },
    { id: 3, desc:'Sonidos extraños al encender el equipo', compas:'CPU' },
    { id: 4, desc:'Sobrecalentamiento', compas:'CPU' },
    { id: 5, desc:'Se reinicia el computador', compas:'FDP' },
    { id: 6, desc:'Olor a quemado', compas:'FDP' },
    { id: 7, desc:'Pantallas Azules al encender el sistema', compas:'RAM' },
    { id: 8, desc:'Sonidos al encender el computador', compas:'RAM' }
  ]

  solucionesDisco =[
    {desc:[
      {id:0,desc:'Al intentar encender el sistema pasa al BIOS y no arranca'}
      
    ]},
    {desc:[
      {id:1,desc:'Pantalla negra a la espera de instrucciones'}
    ]},
    {desc:[
      {id:2,desc:'System error. Hard Disk failture detected al abrir o querer editar un archivo'}
    ]},
    {desc:[
      {id:3,desc:'Se escuchan 5 pitidos.'}
    ]},
    {desc:[
      {id:4,desc:'Consumo excesivo de CPU constantemente'}
    ]},
    {desc:[
      {id:5,desc:'Apagones constantes repentinamente'}
    ]},
    {desc:[
      {id:6,desc:'Fuente de calor sobrecargada'}
    ]},
    {desc:[
      {id:7,desc:'Page fault in nonpaged area'}
    ]},
    {desc:[
      {id:8,desc:'Se escucha un pitido largo'}
    ]}
    
  ]

  soluciones=[
    [
      {
        img:'https://qloudea.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01_1719.jpg',
        sols:['Realizar restablecimiento completo',
        'Restaurar configuracion predeterminada del BIOS '],
        name:'Unidad de almacenamiento'
      }
      
    ],
    [
      {
        img:'https://qloudea.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01_1719.jpg',
        sols:['Combrobar el estado fisico del disco',
        'Restaurar configuracion predeterminada del BIOS '],
        name:'Unidad de almacenamiento'
      }
      
    ],
    [
      {
        img:'https://qloudea.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01_1719.jpg',
        sols:['Realizar un inicio Avanzado',
        'Realizar prueba de diganostico del disco duro'],
        name:'Unidad de almacenamiento'
      }
      
    ],
    [
      {
        img:'https://mundocontact.com/wp-content/uploads/2018/11/Intel-i9-Gen-Core-1.jpg',
        sols:['Cambiar pila CMOS',
        'Actualizar BIOS desde una memoria USB'],
        name:'CPU'
      }
      
    ],
    [
      {
        img:'https://mundocontact.com/wp-content/uploads/2018/11/Intel-i9-Gen-Core-1.jpg',
        sols:['Realizar una limpieza de malware y troyanos',
        'Realizar una limpieza de malware y troyanos'],
        name:'CPU'
      }
      
    ],
    [
      {
        img:'https://intercompras.com/images/product/GETTTECH_PS500W.jpg',
        sols:['Revision de conexiones a la motherboard'],
        name:'Fuente de poder'
      }
      
    ],
    [
      {
        img:'https://intercompras.com/images/product/GETTTECH_PS500W.jpg',
        sols:['Revisar funcionamiento de la fuente de porder',
        'Revisar el voltaje de la fuente de poder'],
        name:'Fuente de poder'
      }
      
    ]
    ,
    [
      {
        img:'https://concepto.de/wp-content/uploads/2018/09/RAM1-e1537470550128.jpg',
        sols:['Deshabilitar la gestion automatica de archivos',
        'Verificar estado de corrupcion de la memoria con scan de windows'],
        name:'RAM'
      }
      
    ],
    [
      {
        img:'https://concepto.de/wp-content/uploads/2018/09/RAM1-e1537470550128.jpg',
        sols:['Revisar los drivers para actualizarlos',
        'Verificar la conexion de la RAM en su sitio'],
        name:'RAM'
      }
      
    ]
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
    console.log(this.selectedOption);
    console.log(this.selectedDesc);
  }

  get descripciones()
  {
    
    return this.solucionesDisco[this.selectedOption].desc;
  }

  get solucionesP()
  {

    return this.soluciones[this.selectedDesc];
  }
}
