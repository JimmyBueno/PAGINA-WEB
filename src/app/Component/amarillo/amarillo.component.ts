import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent,IonButton, IonCardTitle } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-amarillo',
  templateUrl: './amarillo.component.html',
  styleUrls: ['./amarillo.component.scss'],
  imports: [IonCardTitle, IonCardContent, IonCardHeader,IonButton, IonCard,RouterLink],
})
export class AmarilloComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
