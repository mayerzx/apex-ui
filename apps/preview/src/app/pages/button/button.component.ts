import { Component } from '@angular/core';
import { ApxButtonComponent } from '@apex-ui/components';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ApxButtonComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
