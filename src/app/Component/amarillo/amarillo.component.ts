import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; // Añadimos ViewChild
import { IonCard, IonCardHeader, IonCardContent, IonButton, IonCardTitle, IonRow, IonHeader, IonContent, IonToolbar, IonTitle, IonGrid, IonCol } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-amarillo',
  templateUrl: './amarillo.component.html',
  styleUrls: ['./amarillo.component.scss'],
  standalone: true, // Asegúrate de tener esta línea si es standalone
  imports: [IonCol, IonGrid, IonTitle, IonToolbar, IonContent, IonHeader, IonRow, IonCardTitle, IonCardContent, IonCardHeader, IonButton, IonCard, RouterLink],
})
export class AmarilloComponent implements OnInit {
  // Referencia al contenido para controlar el scroll si fuera necesario
  @ViewChild(IonContent, { static: false }) content!: IonContent;
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

  ngOnInit() { }

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