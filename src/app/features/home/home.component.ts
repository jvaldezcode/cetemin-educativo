import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Cursos destacados (puedes modificar o traerlos de un servicio)
  cursosDestacados = [
    {
      icon: 'fa-solid fa-hard-hat',
      nombre: 'Seguridad y Salud Ocupacional',
      descripcion: 'Aprende a identificar riesgos, aplicar normas de seguridad industrial y proteger tu entorno laboral con enfoque en la prevención de accidentes y enfermedades laborales.',
      categoria: 'Seguridad Industrial',
      rating: 4.8,
      color: 'blue',
      disponible: true
    },
    {
      icon: 'fa-solid fa-bolt',
      nombre: 'Electrotécnia Industrial',
      descripcion: 'Desarrolla habilidades en sistemas eléctricos industriales, instalaciones y mantenimiento de equipos eléctricos en entornos industriales.',
      categoria: 'Mantenimiento',
      rating: 4.7,
      color: 'green',
      disponible: false
    }
  ];

  scrollToCursos() {
    const section = document.getElementById('cursos-destacados');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}