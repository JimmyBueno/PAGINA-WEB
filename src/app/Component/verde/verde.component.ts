import { Component, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'; 
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { addIcons } from 'ionicons'; 
import { IonCardContent, IonCardHeader, IonCard, IonButton, IonCardTitle, IonGrid, IonRow, IonCol, IonIcon, IonModal, IonContent } from "@ionic/angular/standalone";
import { logoWhatsapp, logoInstagram, logoFacebook, alertCircleOutline } from "ionicons/icons";

@Component({
  selector: 'app-verde',
  templateUrl: './verde.component.html',
  styleUrls: ['./verde.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonCol, IonRow, IonGrid, IonCardTitle, IonButton, IonCard, IonCardHeader, IonCardContent, RouterLink, IonIcon, IonModal, IonContent],
})
export class VerdeComponent implements OnInit {

  // Variable para el control de edad
  esMayorDeEdad: boolean = false;

  @ViewChild('container') scrollContainer!: ElementRef;

  isMouseDown = false;
  startX = 0;
  startY = 0;
  scrollLeft = 0;
  scrollTop = 0;

  enviarOpinion() {
    alert('¡Gracias por tu opinión! La hemos recibido correctamente.');
    console.log("Opinión enviada");
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true
  };

  constructor() { 
    // Agregamos alertCircleOutline para el icono del modal
    addIcons({ logoWhatsapp, logoInstagram, logoFacebook, alertCircleOutline });

    // Verificamos si ya aceptó anteriormente para no molestar al cliente
    const verificado = localStorage.getItem('mayorDeEdad');
    if (verificado === 'true') {
      this.esMayorDeEdad = true;
    }
  }

  ngOnInit() {}

  // Función para el Modal de Edad
  confirmarEdad(esMayor: boolean) {
    if (esMayor) {
      this.esMayorDeEdad = true;
      localStorage.setItem('mayorDeEdad', 'true');
    } else {
      // Si dice que no, lo sacamos de la página
      window.location.href = "https://www.google.com";
    }
  }

  // Métodos de arrastre (Dragging)
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

  moveEvent(e: any) {
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