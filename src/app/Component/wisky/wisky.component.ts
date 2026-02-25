import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonCardContent,IonCardTitle, IonCardHeader, IonButton, IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-wisky',
  templateUrl: './wisky.component.html',
  styleUrls: ['./wisky.component.scss'],
  imports: [IonRow, IonCol, IonCard, IonCardContent,IonCardHeader,IonCardTitle, RouterLink,IonButton],

})
export class wiskyComponent  implements OnInit {
  @ViewChild('container') scrollContainer!: ElementRef;

  isMouseDown = false;
  startX = 0;
  startY = 0;
  scrollLeft = 0;
  scrollTop = 0;
  enviarOpinion() {
    // Aquí puedes capturar los datos o simplemente mostrar un mensaje
    alert('¡Gracias por tu opinión! La hemos recibido correctamente.');
    console.log("Opinión enviada");
  }

  constructor() { }

  ngOnInit() {}
  // Estos métodos quitan las líneas rojas de tu HTML (image_fbc380.png)
  startDragging(e: MouseEvent) {
    this.isMouseDown = true;
    this.startX = e.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.startY = e.pageY - this.scrollContainer.nativeElement.offsetTop;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.scrollTop = this.scrollContainer.nativeElement.scrollTop;
  }

  stopDragging() {
    this.isMouseDown = false;
  }

  moveEvent(e: any) { // Usamos 'any' para evitar problemas de tipos rápidos
    if (!this.isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const y = e.pageY - this.scrollContainer.nativeElement.offsetTop;
    const walkX = (x - this.startX) * 2;
    const walkY = (y - this.startY) * 2;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walkX;
    this.scrollContainer.nativeElement.scrollTop = this.scrollTop - walkY;
  }

}
