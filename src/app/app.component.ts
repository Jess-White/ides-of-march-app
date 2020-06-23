import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { CipherService } from './cipher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  uri = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }
  
  title = 'ides-of-march-app';
  cipherArray=[]
  getCipher() {
    event.preventDefault();
    const text = event.target.elements["text"].value;
    const shift = event.target.elements["shift"].value;
    const response = this.http.get(`http://localhost:3000/cipher?text=${text}&shift=${shift}`);
    response.subscribe(data => {
      this.cipherArray.push(data);
    });
    console.log(response);
  }
  createCipher(value){
  }
};
