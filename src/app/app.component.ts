import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ides-of-march-app';
  cipherArray=[]
  addCipher(value){    
  this.cipherArray.push(value)  
  console.log(this.cipherArray)
  }
};
