import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCardContent, IonCardHeader, IonCard, IonButton, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-verde',
  templateUrl: './verde.component.html',
  styleUrls: ['./verde.component.scss'],
  imports: [IonCardTitle, IonButton, IonCard, IonCardHeader, IonCardContent,RouterLink],
})
export class VerdeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
