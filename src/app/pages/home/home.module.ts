import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'angular-owl-carousel';
import { GoogleMapsModule } from '@angular/google-maps';

import { SharedModule } from '../../shared/shared.module';

import { SpecialCollectionComponent } from './special-collection/special-collection.component';
import { TopCollectionComponent } from './top-collection/top-collection.component';
import { IndexComponent } from './index/index.component';
import { BlogCollectionComponent } from './blog-collection/blog-collection.component';
import { ServicesComponent } from './services/services.component';
import { SubserviceComponent } from './subservice/subservice.component';
import { ContactComponent } from './contact/contact.component';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
	declarations: [
		SpecialCollectionComponent,
		TopCollectionComponent,
		IndexComponent,
		BlogCollectionComponent,
  		ServicesComponent,
    	SubserviceComponent,
     	ContactComponent,
      AchievementsComponent
	],

	imports: [
		CommonModule,
		RouterModule,
		NgbModule,
		OwlModule,
		SharedModule,
		GoogleMapsModule
	]
})

export class HomeModule { }
