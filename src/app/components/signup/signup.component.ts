import { Component, OnInit } from '@angular/core';
import { JarvisService } from './../../services/jarvis.service';

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

  
  public error =[];

  constructor(private jarvis:JarvisService) { }

  ngOnInit() {
  }
  onSubmit(){
  	return this.jarvis.signup(this.form)
  		.subscribe(
	  		data=>console.log(data),
	  		error=>this.handleError(error)
  		);

  }
  handleError(error){
  	this.error=error.error.errors;
  }

}
