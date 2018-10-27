import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	public form ={
		email:null,
		password:null,
		name:null,
		password_confirmation:null
	}

  public url ="http://127.0.0.1:8000/";
  public error =[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  onSubmit(){
  	return this.http.post(this.url + 'api/signup',this.form)
  		.subscribe(
	  		data=>console.log(data),
	  		error=>this.handleError(error)
  		);

  }
  handleError(error){
  	this.error=error.error.errors;
  }

}
