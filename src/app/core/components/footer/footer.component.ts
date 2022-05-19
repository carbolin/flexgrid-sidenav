import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent {

  contact = [
    {
      name: 'Hoochsitz, Austria, Innsbruck',
      icon: 'location_on'
    },
    {
      name: 'mail@example.com',
      icon: 'mail'

    },
    {
      name: '+43-1234-5678910',
      icon: 'phone'
    }
  ];

  intern = [
    {
      name: 'link 1',
      icon: 'link'
    },
    {
      name: 'link 2',
      icon: 'link'
    },
    {
      name: 'link 2',
      icon: 'link'
    }
  ];

  extern = [
    {
      name: 'link 1',
      icon: 'open_in_new'
    },
    {
      name: 'link 2',
      icon: 'open_in_new'
    },
    {
      name: 'link 3',
      icon: 'open_in_new'
    }
  ];

  constructor() { }
}
