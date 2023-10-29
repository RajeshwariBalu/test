import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/shared/services/modal.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { introSlider, brandSlider } from '../data';

interface Counter {
    limit: number;
    text: string;
    unit?: string;
}

export const counters: Counter[] = [
    {
        limit: 2163,
        text: "Projects / Year",
        unit: "+"
    },
    {
        limit: 38,
        text: "More requests",
        unit: "%"
    },
    {
        limit: 68,
        text: "Possible Categories",
        unit: "+"
    }    
]

export const sliderOpt = {
    items: 1,
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    dots: true,
    smartSpeed: 400,
    autoplay: false,
    autoplayTimeout: 15000
}

export const testimonialSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: false,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
            dots: false
        }
    }
}

export const featureSlider = {
    ...sliderOpt,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2,
            margin: 20
        },
        992: {
            items: 1
        }
    }
}


@Component({
	selector: 'molla-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

	products = [];
    newProducts = [];
	featuredProducts = [];
	posts = [];
	loaded = false;
	introSlider = introSlider;
	brandSlider = brandSlider;
    counters = counters;
    testimonialSlider = testimonialSlider;
    featureSlider = featureSlider;
    sliderOption = {
        ...sliderOpt,
        nav: false,
        dots: true,
        margin: 20,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4,
                nav: true,
                dots: false
            }
        }
    }

	constructor(public apiService: ApiService, public utilsService: UtilsService, private modalService: ModalService,) {
		//this.modalService.openNewsletter();

		this.apiService.fetchHomeData().subscribe(result => {
			this.products = result.products;
            this.newProducts = utilsService.attrFilter(result.products, 'new');
			this.featuredProducts = utilsService.attrFilter(result.products, 'featured')
			this.posts = result.blogs;
			this.loaded = true;
		})

       	}

	ngOnInit(): void {
	}
}
