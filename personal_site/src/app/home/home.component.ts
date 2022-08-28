import {Component} from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('openClose', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateY(-100%)' }))
      ])
  
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEmail = faEnvelope;
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  goToLink(url: string,mail:Boolean){
    if(mail==true) {
      window.open(url,"_self")
    }else {
      window.open(url, "_blank");
    }
    
  }

}
