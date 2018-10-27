import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarvisService {

	public url ="http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  signup(data){
  	return this.http.post(this.url + 'api/signup',data);
  }

  login(data){
  	return this.http.post(this.url + 'api/login',data);
  }
}
