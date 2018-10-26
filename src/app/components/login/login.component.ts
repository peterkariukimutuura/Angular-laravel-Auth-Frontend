import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form ={
  	email:null,
  	password:null
  }

  public url ="http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  onSubmit(){
  	console.log(this.form);
  	return this.http.post(this.url + 'api/auth/login',this.form)
  		.subscribe(
	  		data=>console.log(data),
	  		error=>console.log(error)
  		);

  }

  ngOnInit() {
  }

}
