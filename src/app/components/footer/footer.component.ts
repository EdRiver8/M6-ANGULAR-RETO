import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar color="accent">
      <span>&copy; 2025 BanCapsula</span>
      <span class="spacer"></span>
      <span>Teléfono: 123-456-7890</span>
      <span>Email: info&#64;bancapsula.com</span>
    </mat-toolbar>
  `,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
