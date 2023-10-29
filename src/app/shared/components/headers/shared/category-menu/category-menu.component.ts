import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component( {
	selector: 'molla-category-menu',
	templateUrl: './category-menu.component.html',
	styleUrls: [ './category-menu.component.scss' ]
} )

export class CategoryMenuComponent implements OnInit {

	current = '/';

	constructor (private router: Router) { }

	ngOnInit (): void {
	}

}
