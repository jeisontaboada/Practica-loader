import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  images: string[] = ['assets/imagen1.jpeg', 'assets/imagen2.jpeg', 'assets/imagen3.jpeg']; // secuencia de las imágenes
  texts: string[] = ['Entre Rascacielos', 'Refugio Natural', 'Horizonte Nevado']; // Textos que se mostrarán
  currentIndex: number = -1;
  currentText: string = '';
  showLoader = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url !== '/loader') {
      // Si no estamos en la ruta del componente Loader, redirigir a la ruta del componente Loader
      this.router.navigate(['/start']);
    } else {
      // Iniciar el proceso de carga
      this.showLoader = true;
      this.startLoader();
    }
  }

  startLoader() {
    const changeImageAndText = () => {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.router.navigate(['/menu']);
        return;
      }
      this.currentText = this.texts[this.currentIndex];
      setTimeout(changeImageAndText, 3000);
    };

    changeImageAndText();
  }

  nextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.router.navigate(['/menu']);
      return;
    }
    this.currentText = this.texts[this.currentIndex];
  }
}
