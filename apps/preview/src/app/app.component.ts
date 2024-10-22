import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApxButtonComponent } from '@apex-ui/components';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, ApxButtonComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'preview';
}
