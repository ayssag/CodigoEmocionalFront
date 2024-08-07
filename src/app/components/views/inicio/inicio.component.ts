import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../widgets/header/header.component';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
}
