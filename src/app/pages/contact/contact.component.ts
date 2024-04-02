import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  items = [
    {img:"/assets/icons-rede/github.png",name:"GitHub",link:'https://github.com/PedroPog'},
    {img:"/assets/icons-rede/linkedin.png",name:"Linkedin",
    link:'https://www.linkedin.com/in/pedro-henrique-vieira-de-freitas-66111515b/'},
    {img:"/assets/icons-rede/google.png",name:"Email",
    link:'mailto:pevieiraf@gmail.com?'},
  ];
}
