import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';
import { ComingSoonPageComponent } from './pages/others/coming-soon/coming-soon.component';
import { IndexComponent } from './pages/home/index/index.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { SubserviceComponent } from './pages/home/subservice/subservice.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { AchievementsComponent } from './pages/home/achievements/achievements.component';
const routes: Routes = [
	{
		path: 'pages/coming-soon',
		component: ComingSoonPageComponent
	},
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: IndexComponent
			},
			{
				path: 'services',
				component: ServicesComponent
			},
			{
				path: 'subservices',
				component: SubserviceComponent
			},
			{
				path: 'contact',
				component: ContactComponent
			},
			{
				path: 'achievements',
				component: AchievementsComponent
			},
			{
				path: 'elements',
				loadChildren: () => import( './pages/elements/elements.module' ).then( m => m.ElementsModule )
			},
			{
				path: 'blog',
				loadChildren: () => import( './pages/blog/blog.module' ).then( m => m.BlogModule )
			},
			{
				path: 'pages',
				loadChildren: () => import( './pages/others/pages.module' ).then( m => m.PagesModule )
			},
			{
				path: 'shop',
				loadChildren: () => import( './pages/shop/shop.module' ).then( m => m.ShopModule )
			},
			{
				path: 'product',
				loadChildren: () => import( './pages/product/product.module' ).then( m => m.ProductModule )
			}
		]
	},
	{
		path: '**',
		redirectTo: '/pages/404'
	}
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes, { useHash: false, anchorScrolling: 'disabled', scrollPositionRestoration: 'disabled' } ) ],
	exports: [ RouterModule ]
} )

export class AppRoutingModule { }