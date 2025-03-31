import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="main-section">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/banking1.jpg"
              class="d-block w-100"
              alt="Banca Digital 1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/banking2.jpg"
              class="d-block w-100"
              alt="Banca Digital 2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/banking3.jpg"
              class="d-block w-100"
              alt="Banca Digital 3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- <div class="description">
        <h2>Bienvenido a BanCapsula</h2>
        <p>Dinero en Capsulado.</p>
      </div> -->
      <div class="hero-section">
        <h1>Banco Capsula</h1>
        <p>
          Administramos tu dinero de manera rápida y segura al estilo
          <strong>Corporación Cápsula</strong>.
        </p>
        <button>Abrir Cuenta</button>
      </div>
    </div>
  `,
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {}
