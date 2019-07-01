import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'RED SOCIAL'
	}

	ngOnInit(){
		console.log('home.component cargado !!');
	}
}