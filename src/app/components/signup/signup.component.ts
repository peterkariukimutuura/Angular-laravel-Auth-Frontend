import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
