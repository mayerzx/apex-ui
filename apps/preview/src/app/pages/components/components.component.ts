import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApxButtonComponent } from '@apex-ui/components';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApxButtonComponent, RouterLink],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent {}
