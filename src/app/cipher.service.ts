import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CipherService {

  uri = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  getCipher() {
    console.log("getting cipher")
    return this.http.get(`${this.uri}/ciphers?text=apple&shift=8`);
  }

  getCipherById(id) {
    return this.http.get(`${this.uri}/ciphers/${id}`);
  }

  addCipher(text, skip) {
    const cipher = {
      text: text,
      skip: skip
    };
    return this.http.post(`${this.uri}/ciphers/add`, cipher);
  }

}