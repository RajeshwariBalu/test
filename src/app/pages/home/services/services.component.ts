import { Component, OnInit } from '@angular/core';


export interface Card {
  title: string,
  icon?: string,
  body: string,
}

export interface Img {
  imgone: string,
  imgtwo: string
}

export interface Accordion {
  adClass?: string,
  cardAclass?: string,
  showIcon?: boolean,
  cards: Card[],
}

export interface AccordionGroup {
  title?: string,
  subtitle:string,
  items: Accordion[],
}



const card1: Card = {
  title: 'Arrange your interior',
  icon: 'icon-star-o',
  body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.'
}

const card2: Card = {
  title: 'Arrange your exterior',
  icon: 'icon-info-circle',
  body: 'Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. '
}

const card3: Card = {
  title: 'Build or renovate',
  icon: 'icon-heart-o',
  body: 'Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. '
}

const card4: Card = {
  title: 'Other Work',
  icon: 'icon-heart-o',
  body: 'Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. '
}

const accordion5: Accordion = {
  adClass: 'accordion-rounded',
  cardAclass: 'card-box card-sm bg-light',
  cards: [
      card1, card2, card3, card4
  ]  
}


export const accordionGroups: AccordionGroup[] = [
   {
      title: 'Want to do some work?',
      subtitle: 'Tell us about your project and receive quotes from qualified craftsmen near you.',
      items: [
          accordion5
      ]
  }
]

@Component({
  selector: 'molla-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  accordionGroups = accordionGroups;

  imagevalue1: any[] = [
    {'img': 'assets/images/portfolio/services/1.jpg', 'name': 'Interior staircase', 'count':3, 'id':'staircase' },
    {'img': 'assets/images/portfolio/services/2.jpg', 'name': 'Interior carpentry', 'count':9, 'id':'carpentry' },
    {'img': 'assets/images/portfolio/services/3.jpg', 'name': 'Painting / Tapestry / False ceiling / Partition etc.', 'count':10, 'id':'Painting' },
    {'img': 'assets/images/portfolio/services/4.jpg', 'name': 'Renovate your interior', 'count':6, 'id':'Renovate' },
    {'img': 'assets/images/portfolio/services/5.jpg', 'name': 'Interior Floors', 'count':11, 'id':'Floors' },
    {'img': 'assets/images/portfolio/services/6.jpg', 'name': 'Bathroom / Shower / Sanitary / Wellness', 'count':7, 'id':'Bathroom' },
  ]

  imagevalue2: any[] = [
    {'img': 'assets/images/portfolio/services/7.jpg', 'name': 'Design of the Outdoor Area', 'count':3 },
    {'img': 'assets/images/portfolio/services/8.jpg', 'name': 'Fences and Gates', 'count':3 },
    {'img': 'assets/images/portfolio/services/9.jpg', 'name': 'External Stairs', 'count':3 },
    {'img': 'assets/images/portfolio/services/10.jpg', 'name': 'Gardening/Landscaping', 'count':3 },
    {'img': 'assets/images/portfolio/services/11.jpg', 'name': 'Small and Large External Walls', 'count':3 },
    {'img': 'assets/images/portfolio/services/12.jpg', 'name': 'Swimming Pool / Pool and Pond', 'count':3 },
    {'img': 'assets/images/portfolio/services/13.jpg', 'name': 'External Floors', 'count':3 },
    {'img': 'assets/images/portfolio/services/14.jpg', 'name': 'Terraces', 'count':3 },
    {'img': 'assets/images/portfolio/services/15.jpg', 'name': 'Veranda / Pergola', 'count':3 },    
  ]

  imagevalue3: any[] = [
    {'img': 'assets/images/portfolio/services/16.jpg', 'name': 'Carport Construction', 'count':3 },
    {'img': 'assets/images/portfolio/services/17.jpg', 'name': 'Construction Work', 'count':3 },
    {'img': 'assets/images/portfolio/services/18.jpg', 'name': 'Construction Rubber & Removal', 'count':3 },
    {'img': 'assets/images/portfolio/services/19.jpg', 'name': 'Power / Wiring', 'count':3 },
    {'img': 'assets/images/portfolio/services/20.jpg', 'name': 'Sealing and Drainage', 'count':3 },
    {'img': 'assets/images/portfolio/services/21.jpg', 'name': 'Facde', 'count':3 },
    {'img': 'assets/images/portfolio/services/22.jpg', 'name': 'Windows / Doors / Shutters', 'count':3 },
    {'img': 'assets/images/portfolio/services/23.jpg', 'name': 'Heat Pumps / Air Conditioning / Gaz and Pellet Heaters / VMC', 'count':3 },
    {'img': 'assets/images/portfolio/services/24.jpg', 'name': 'House or Apartment Renovation', 'count':3 },
    {'img': 'assets/images/portfolio/services/25.jpg', 'name': 'Canopy', 'count':3 },
    {'img': 'assets/images/portfolio/services/26.jpg', 'name': 'Steel Work', 'count':3 },  
  ]

  imagevalue4: any[] = [
    {'img': 'assets/images/portfolio/services/27.jpg', 'name': 'Energy Certificate', 'count':3 },
    {'img': 'assets/images/portfolio/services/28.jpg', 'name': 'Move', 'count':3 },
    {'img': 'assets/images/portfolio/services/29.jpg', 'name': 'Maintenance & Cleaning / Housekeeper', 'count':3 },
    {'img': 'assets/images/portfolio/services/30.jpg', 'name': 'Car & Truck Lettering', 'count':3 },
    {'img': 'assets/images/portfolio/services/31.jpg', 'name': 'Assembly and Installation', 'count':3 },
    {'img': 'assets/images/portfolio/services/33.jpg', 'name': 'Alarm Systems and Fire Detectors', 'count':3 },
    {'img': 'assets/images/portfolio/services/32.jpg', 'name': 'House Clearances / Garbage Disposal', 'count':3 },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
