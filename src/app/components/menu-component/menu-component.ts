import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  logOutEmpleado(): void {
    sessionStorage.removeItem("TOKEN")
  }
}
