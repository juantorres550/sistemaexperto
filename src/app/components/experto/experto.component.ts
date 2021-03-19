import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experto',
  templateUrl: './experto.component.html',
  styleUrls: ['./experto.component.css']
})
export class ExpertoComponent implements OnInit {

  ex1 : number = 0;
  ro2 : number = 0;
  ro3 : number = 0;
  ro4 : number = 0;
  ro5 : number = 0;
  ro6 : number = 0;
  ro7 : number = 0;
  ro8 : number = 0;
  ro9 : number = 0;
  ro10 : number = 0;
  @ViewChild('virus') myInput: ElementRef;
  @ViewChild('op3') op3: ElementRef;
  @ViewChild('op2') op2: ElementRef;
  @ViewChild('op4') op4: ElementRef;
  @ViewChild('op5') op5: ElementRef;
  @ViewChild('op6') op6: ElementRef;
  @ViewChild('op7') op7: ElementRef;
  @ViewChild('op8') op8: ElementRef;
  @ViewChild('op9') op9: ElementRef;
  @ViewChild('op10') op10: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.myInput);
  }
  
  op1()
  {
    console.log(this.myInput.nativeElement.value);

    if(this.myInput.nativeElement.value == 1)
    {
      this.ex1 = 1;
    }
    else
    {
      this.ex1 = 2;
    }

  }
  
  opt3()
  {
    if(this.op3.nativeElement.value == 1)
    {
      this.ro3 = 1;
    }
    else if(this.op3.nativeElement.value == 2)
    {
      this.ro3 = 2;
    }
  }

  opt2()
  {
    if(this.op2.nativeElement.value == 1)
    {
      this.ro2 = 1;
    }
    else if(this.op2.nativeElement.value == 2)
    {
      this.ro2 = 2;
    }

  }

  opt4()
  {
    if(this.op4.nativeElement.value == 1)
    {
      this.ro4 = 1;
    }
    else if(this.op4.nativeElement.value == 2)
    {
      this.ro4 = 2;
    }
  }

  opt5()
  {
    if(this.op5.nativeElement.value == 1)
    {
      this.ro5 = 1;
    }
    else if(this.op5.nativeElement.value == 2)
    {
      this.ro5 = 2;
    }
  }

  opt6()
  {
    if(this.op6.nativeElement.value == 1)
    {
      this.ro6 = 1;
    }
    else if(this.op6.nativeElement.value == 2)
    {
      this.ro6 = 2;
    }
  }
  
  opt7()
  {
    if(this.op7.nativeElement.value == 1)
    {
      this.ro7 = 1;
    }
    else if(this.op7.nativeElement.value == 2)
    {
      this.ro7 = 2;
    }
  }

  opt8()
  {
    if(this.op8.nativeElement.value == 1)
    {
      this.ro8 = 1;
    }
    else if(this.op8.nativeElement.value == 2)
    {
      this.ex1 = 2;
    }
  }

  opt9()
  {
    if(this.op9.nativeElement.value == 1)
    {
      this.ro9 = 1;
    }
    else if(this.op9.nativeElement.value == 2)
    {
      this.ro9 = 2;
    }
  }

  opt10()
  {
    if(this.op10.nativeElement.value == 1)
    {
      this.ro10 = 1;
    }
    else if(this.op10.nativeElement.value == 2)
    {
      this.ro10 = 2;
    }
  }

}
