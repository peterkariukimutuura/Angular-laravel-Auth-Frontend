import { Component, OnInit } from '@angular/core';
import { JarvisService } from './../../services/jarvis.service';
import { TokenService } from './../../services/token.service';

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

  public error =null;

  constructor(
    private jarvis:JarvisService,
    private token:TokenService
    ) { }

  onSubmit(){
  	return this.jarvis.login(this.form)
  		.subscribe(
	  		data=>this.HandleResponse(data),
	  		error=>this.handleError(error)
  		);

  }

  handleError(error){
  	this.error=error.error.error;
  }

  HandleResponse(data){
    this.token.handle(data.access_token);
    if (this.token.isValid()) {
      this.error=null;
    }
  }

  ngOnInit() {
  }

}
