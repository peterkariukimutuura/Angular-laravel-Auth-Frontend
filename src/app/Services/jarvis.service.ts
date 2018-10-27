import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarvisService {

	private base_url ="http://127.0.0.1:8000/api";

  constructor(private http:HttpClient) { }

  signup(data){
  	return this.http.post(this.base_url + '/signup',data);
  }

  login(data){
  	return this.http.post(this.base_url + '/login',data); 
  }
}
