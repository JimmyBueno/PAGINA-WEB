import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonCardContent,IonCardTitle, IonCardHeader, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-rojo',
  templateUrl: './rojo.component.html',
  styleUrls: ['./rojo.component.scss'],
  imports: [IonCard, IonCardContent,IonCardHeader,IonCardTitle, RouterLink,IonButton],

})
export class RojoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
