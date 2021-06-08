import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '100 Days Angular Challenge';
  RouteOptions = {
    title: 'Available Routes',
    isOpen: false,
    customClass: 'route-modal'
  };

  public openRouteModal(): void {
    this.RouteOptions.isOpen = true;
  }
}
