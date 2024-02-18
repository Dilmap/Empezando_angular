import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  
})
export class NavComponent {
  array_redes_sociales:any = [
    {title: 'Facebook',  icon: './assets/img/Fb.svg'},
    {title: 'Twitter',  icon: './assets/img/Twiter.svg'},
    {title: 'Instagram',  icon: './assets/img/Insta.svg'},
    {title: 'Pinterest',  icon: './assets/img/Pintrest.svg'},
  ];

  div = 'none';

  mostrar(){
    if(this.div === 'none'){
      this.div='block'
    }
    else{
      this.div='none'
    }
  }
}
