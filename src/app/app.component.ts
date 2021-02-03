import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decorators-demo';
  myInputMessage:string="I am Parent Component for child";

  GetChildData(event:any){  
    console.log(event);  
 }  

//   displayCounter(count:number){
//   console.log(count)
// }
 
}