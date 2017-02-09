import { Component }          from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div align="center">
    <h1>{{title}}</h1>
    <img border="0" alt="North Star Logo" src="/app/Assets/laughingman.gif" width="250" height="250">
    </div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  company = 'NorthStar Corp';
}
