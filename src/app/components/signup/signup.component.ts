import { Component, OnInit } from '@angular/core';
import { JarvisService } from './../../services/jarvis.service';
import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';

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

  constructor(
    private token:TokenService,
    private jarvis:JarvisService,
    private router : Router
    ) { }

  ngOnInit() {
  }
  onSubmit(){
  	return this.jarvis.signup(this.form)
  		.subscribe(
	  		data=>this.handleResponse(data),
	  		error=>this.handleError(error)
  		);

  }
  handleError(error){
  	this.error=error.error.errors;
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    if (this.token.isValid()) {
      this.error=null;
      this.router.navigateByUrl('/profile');
    }
  }

}
