import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  addProduct(nwProd){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/prod/add", nwProd, {headers:headers});
  }
  shwProduct(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/prod/getAll", {headers:headers});
  }

  updtProduct(updtProd){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    console.log(updtProd);
    return this.http.post("http://localhost:3000/prod/update", updtProd, {headers:headers});
  }

}
