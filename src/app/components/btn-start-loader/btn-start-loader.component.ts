import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-start-loader',
  templateUrl: './btn-start-loader.component.html',
  styleUrls: ['./btn-start-loader.component.scss'],
})
export class BtnStartLoaderComponent  implements OnInit {

  constructor(private router: Router) { }
  startLoader() {
    this.router.navigate(['/loader']); // Navegar al componente Loader
  }
  ngOnInit() {}

}
