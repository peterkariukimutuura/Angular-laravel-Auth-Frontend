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
  public error =null;

  constructor(private http:HttpClient) { }

  onSubmit(){
  	console.log(this.form);
  	return this.http.post(this.url + 'api/login',this.form)
  		.subscribe(
	  		data=>console.log(data),
	  		error=>this.handleError(error)
  		);

  }

  handleError(error){
  	this.error=error.error.error;
  }

  ngOnInit() {
  }

}
