import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public loggedIn :boolean;

  constructor(private Auth :AuthServiceService) { }

  ngOnInit() {
  	this.Auth.authStatus.subscribe(value=>this.loggedIn=value)
  }

}
