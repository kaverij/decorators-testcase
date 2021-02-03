import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';  

  
@Component({  
   selector: 'app-child',  
   templateUrl: './child.component.html',  
   styleUrls: ['./child.component.css']  
})  
  
export class ChildComponent implements OnInit {  
@Input() myInputMsg: any;  
@Output() myOutput=new EventEmitter();
outputMessage:string="I am a child component"
constructor() { }  
  
ngOnInit() { 
   console.log(this.myInputMsg);  
   }  

   sendValues(){  
    this.myOutput.emit(this.outputMessage);  
 } 
  
}  