import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApxButtonComponent } from '@apex-ui/components';

@Component({
  standalone: true,
  imports: [RouterModule, ApxButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'preview';
}
